// main.js
document.addEventListener('DOMContentLoaded', () =>
{
    // Configurar número do WhatsApp (substitua pelo número real com código do país sem "+"; ex: "5511912345678")
    const WHATSAPP_NUMBER = '5511995758183';

    const whatsappBtn = document.getElementById('whatsapp-btn');
    const footerWhatsapp = document.getElementById('footer-whatsapp');
    const sendWhatsappBtn = document.getElementById('send-whatsapp');
    const form = document.getElementById('service-form');
    const preview = document.getElementById('preview');
    const pictureInput = document.getElementById('picture');
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const formMessage = document.getElementById('form-message');

    // Detectar se é mobile
    const isMobile = () => window.innerWidth < 768 || /iPhone|iPad|Android|mobile/i.test(navigator.userAgent);

    // Helpers para validação do número de WhatsApp
    function normalizedWhatsNumber()
    {
        if (!WHATSAPP_NUMBER) return null;
        const digits = String(WHATSAPP_NUMBER).replace(/\D/g, '');
        // considerar placeholder com texto "SEUNUMERO" como não configurado
        if (/SEUNUMERO/i.test(WHATSAPP_NUMBER) || digits.length < 8) return null;
        return digits;
    }

    function isWhatsAppConfigured()
    {
        return !!normalizedWhatsNumber();
    }

    // Função para abrir WhatsApp com mensagem padrão
    function openWhatsAppWithMessage(text)
    {
        const number = normalizedWhatsNumber();
        if (!number)
        {
            // mensagem curta e visível ao desenvolvedor/usuário
            alert('Número do WhatsApp não configurado. Atualize WHATSAPP_NUMBER em js/main.js');
            return;
        }
        const encoded = encodeURIComponent(text);
        // usar wa.me para mobile, https para web
        const url = `https://wa.me/${number}?text=${encoded}`;
        if (isMobile())
        {
            window.location.href = url;
        } else
        {
            window.open(url, '_blank');
        }
    }

    // Botão principal WhatsApp no header (somente se existir)
    if (whatsappBtn)
    {
        whatsappBtn.addEventListener('click', (e) =>
        {
            e.preventDefault();
            openWhatsAppWithMessage('Olá! Gostaria de pedir um orçamento na MaxClean.');
        });
    }
    if (footerWhatsapp)
    {
        footerWhatsapp.addEventListener('click', (e) =>
        {
            e.preventDefault();
            openWhatsAppWithMessage('Olá! Vi seu site e quero saber preços.');
        });
    }

    // Preview da imagem anexada
    if (pictureInput && preview)
    {
        pictureInput.addEventListener('change', () =>
        {
            preview.innerHTML = '';
            const file = pictureInput.files && pictureInput.files[0];
            if (!file) return;
            if (!file.type || !file.type.startsWith('image/'))
            {
                preview.textContent = 'Apenas imagens são permitidas.';
                return;
            }
            // Validar tamanho máximo (5MB)
            const maxSize = 5 * 1024 * 1024;
            if (file.size > maxSize)
            {
                preview.textContent = 'Arquivo muito grande (máx. 5MB).';
                pictureInput.value = '';
                return;
            }
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.alt = 'Pré-visualização da foto';
            preview.appendChild(img);
        });
    }

    // Enviar formulário (simples: valida e mostra mensagem)
    if (form)
    {
        form.addEventListener('submit', (e) =>
        {
            e.preventDefault();
            if (formMessage) formMessage.textContent = '';
            // validação de rádio
            const objectSelected = form.querySelector('input[name="object"]:checked');
            if (!objectSelected)
            {
                if (formMessage) formMessage.textContent = 'Por favor, selecione o objeto a ser limpo.';
                return;
            }
            // valida padrão do telefone
            const phone = (form.phone && form.phone.value || '').trim();
            const phoneRegex = /\(?\d{2}\)?\s?\d{4,5}-?\d{4}/;
            if (!phoneRegex.test(phone))
            {
                if (formMessage) formMessage.textContent = 'Telefone inválido. Use (11) 91111-1111';
                return;
            }
            // se tudo ok, simular envio
            if (formMessage) formMessage.textContent = 'Solicitação enviada! Em breve entraremos em contato.';
            form.reset();
            if (preview) preview.innerHTML = '';
            setTimeout(() => { if (formMessage) formMessage.textContent = ''; }, 5000);
        });
    }

    // botão "Enviar via WhatsApp" monta a mensagem com os dados do formulário e abre WhatsApp
    if (sendWhatsappBtn)
    {
        sendWhatsappBtn.addEventListener('click', () =>
        {
            const name = (form && form.name && form.name.value || '').trim();
            const phone = (form && form.phone && form.phone.value || '').trim();
            const objectSel = (form && (form.querySelector('input[name="object"]:checked') || {}).value) || '';
            const details = (form && form.details && form.details.value || '').trim();
            let message = `Olá, sou ${name || 'um cliente'}. Gostaria de orçamento para: ${objectSel || '—'}. Telefone: ${phone || '—'}. Detalhes: ${details || '—'}.`;
            openWhatsAppWithMessage(message);
        });
    }

    // Lightbox para galeria
    if (gallery)
    {
        gallery.querySelectorAll('.gallery-item img').forEach(img =>
        {
            img.addEventListener('click', () => openLightbox(img));
            const parent = img.closest('.gallery-item');
            if (parent)
            {
                parent.addEventListener('keydown', (e) =>
                {
                    if (e.key === 'Enter' || e.key === ' ')
                    {
                        e.preventDefault();
                        openLightbox(img);
                    }
                });
            }
        });
    }

    function openLightbox(img)
    {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = img.src || '';
        lightboxImg.alt = img.alt || '';
        if (lightboxCaption) lightboxCaption.textContent = img.dataset.caption || img.alt || '';
        lightbox.style.display = 'flex';
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (lightboxClose) lightboxClose.focus();
    }

    function closeLightbox()
    {
        if (!lightbox) return;
        lightbox.style.display = 'none';
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lightboxImg) lightboxImg.src = '';
        if (lightboxCaption) lightboxCaption.textContent = '';
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightbox)
    {
        lightbox.addEventListener('click', (e) =>
        {
            if (e.target === lightbox) closeLightbox();
        });
    }
    document.addEventListener('keydown', (e) =>
    {
        if (e.key === 'Escape') closeLightbox();
    });

    // se quiser, colocar um número real no footer link
    if (footerWhatsapp && !isWhatsAppConfigured()) footerWhatsapp.href = '#';
});
