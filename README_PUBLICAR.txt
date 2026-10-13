LANDING CB — ANTES DE COMPRAR
==============================

Esta carpeta está lista para publicarse como sitio estático sin pagar hosting.

1) CONFIGURACIÓN RÁPIDA
-----------------------
Abrí el archivo config.js y completá:
- paymentUrl: tu Link de Pago de Mercado Pago.
- whatsappNumber: formato internacional sin + ni espacios. Ej.: 54911XXXXXXXX.
- instagramUrl: link completo de tu Instagram profesional.
- contactEmail: tu email de contacto (reservado para futuras automatizaciones).
- launchPrice / regularPrice: podés cambiar los precios desde ahí.

No hace falta tocar index.html para estas variables.

2) MERCADO PAGO
---------------
Creá un Link de Pago con el nombre “Antes de Comprar — Viviendas y Terrenos” y el precio correspondiente.
Copiá la URL y pegala en paymentUrl dentro de config.js.

IMPORTANTE: crear el Link de Pago no requiere e-commerce ni cuota fija; Mercado Pago cobra el costo de procesamiento cuando vendés. La entrega automática del PDF NO queda validada por una landing estática solamente.

3) PUBLICAR GRATIS — CLOUDFLARE PAGES
-------------------------------------
Opción recomendada:
- Creá una cuenta gratuita en Cloudflare.
- Workers & Pages > Create > Pages.
- Podés subir el proyecto desde un repositorio Git o usar Direct Upload según la opción disponible.
- Publicá el contenido de esta carpeta.
- Obtendrás una dirección tipo: nombre-del-proyecto.pages.dev
- Más adelante podés conectar tu propio dominio sin rehacer la web.

Alternativa: GitHub Pages también permite alojar sitios estáticos gratis y luego asociar un dominio propio.

4) LINK EN BIO
--------------
Cuando el sitio esté publicado, pegá la URL de la landing directamente en la bio de Instagram.
No hace falta Linktree si querés llevar todo el tráfico a este producto.

5) ENTREGA DEL EBOOK
-------------------
FASE GRATIS / INICIAL:
- La landing envía al comprador a Mercado Pago.
- Mercado Pago acredita el cobro en tu cuenta.
- En esta primera fase, entregás el ebook manualmente por email o WhatsApp.

FASE AUTOMÁTICA (siguiente paso):
- Integrar Mercado Pago Checkout Pro + Webhooks.
- Al aprobarse el pago, el sistema valida la transacción y envía automáticamente un enlace privado de descarga.
- Esto requiere credenciales de Mercado Pago y un pequeño backend/serverless. El proyecto incluye gracias.html como base para esa futura integración.

6) ARCHIVOS
-----------
index.html            Landing principal.
styles.css            Diseño negro/dorado/blanco, responsive.
script.js             Botones, previews, FAQ, tracking opcional.
config.js             Tus links, precios y datos editables.
gracias.html           Página preparada para postcompra futura.
assets/                Portada, previews y fotos del autor.

7) NO SUBAS EL PDF DE VENTA A LA CARPETA PÚBLICA
------------------------------------------------
El ebook NO está incluido en esta landing a propósito. Si lo subís como archivo público, cualquiera que conozca la URL podría descargarlo sin pagar.


DATOS CONFIGURADOS
- Mercado Pago: https://mpago.li/2kztqFx
- Instagram: https://www.instagram.com/lic.cosentino/
- Email: cosentino.inmobiliario@gmail.com
- Precio lanzamiento: $14.900 ARS
- Precio habitual: $19.900 ARS
- WhatsApp: pendiente/opcional; mientras tanto, el botón de consulta abre un email prearmado.
