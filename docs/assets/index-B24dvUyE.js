(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerPolicy&&(n.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?n.credentials="include":l.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(l){if(l.ep)return;l.ep=!0;const n=o(l);fetch(l.href,n)}})();const xe=[{code:"hu",label:"Magyar"},{code:"en",label:"English"},{code:"de",label:"Deutsch"},{code:"es",label:"Español"},{code:"ru",label:"Русский"},{code:"pl",label:"Polski"},{code:"ja",label:"日本語"},{code:"zh",label:"中文"},{code:"ko",label:"한국어"},{code:"tr",label:"Türkçe"},{code:"it",label:"Italiano"}],me="discord-formater-lang",S={hu:{"app.title":"OwU","app.subtitle":"Markdown szöveg készítése Discordhoz","lang.label":"Nyelv","panel.editor":"Szerkesztő","panel.preview":"Előnézet","btn.sampleText":"Minta szöveg","btn.sampleTextTitle":"Minta szöveg betöltése","btn.emojis":"Emojik","btn.emojisTitle":"Emojik","btn.copyText":"Szöveg másolása","copy.copied":"Másolva!","editor.placeholder":"Írd ide a szöveget… Kijelöléskor megjelenik a formázó menü.","preview.empty":"Az előnézet itt jelenik meg…","modal.emojis":"Emojik","modal.close":"Bezárás","emoji.name":"Emoji neve","emoji.namePlaceholder":"pl. monkas","emoji.nameHint":"Discordban így jelenik meg: <code>:név:</code>","emoji.upload":"WebP emoji feltöltése","emoji.uploadHint":"Ha üres a név mező, a fájlnév lesz javaslatként kitöltve","emoji.link":"Emoji link","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"Link megadásakor a Mentés gomb letölti és elmenti az emojit.","emoji.save":"Mentés","emoji.downloading":"Letöltés…","emoji.empty":"Még nincs emoji. Tölts fel egy .webp fájlt vagy ments egyet linkről!","emoji.insert":":{name}: beillesztése","emoji.editLink":"Link szerkesztése","emoji.editLinkPrompt":"Emoji link URL:","emoji.delete":"Törlés","emoji.deleteConfirm":"Törlöd a :{name}: emojit?","format.placeholder":"szöveg","link.defaultText":"ez a szöveg az","format.bold":"Félkövér (**text**)","format.italic":"Dőlt (*text*)","format.underline":"Aláhúzás (__text__)","format.boldItalic":"Félkövér dőlt (***text***)","format.underlineBold":"Aláhúzott félkövér","format.underlineItalic":"Aláhúzott dőlt","format.underlineBoldItalic":"Aláhúzott félkövér dőlt","format.strikethrough":"Áthúzás (~~text~~)","format.spoiler":"Spoiler (||text||)","format.code":"Kód (`text`)","format.codeblock":"Kód blokk","format.h1":"Nagy fejléc (# text)","format.h2":"Közepes fejléc (## text)","format.h3":"Kis fejléc (### text)","format.subtext":"Alcím (-# text)","format.quote":"Idézet (> text)","format.multiquote":"Többsoros idézet (>>> csak az első sor)","format.list":"Lista (- text)","format.link":"Link ([text](url))","format.glitch":"Glitch / Zalgo szöveg","btn.glitch":"Glitch","btn.glitchTitle":"Glitch / Zalgo szöveg generátor","modal.glitch":"Glitch szöveg","glitch.description":"Unicode diakritikus jeleket ad a szöveghez – Discordba is bemásolható zalgo effekt.","glitch.intensity":"Intenzitás","glitch.level.mini":"Enyhe","glitch.level.normal":"Közepes","glitch.level.max":"Erős","glitch.level.chaos":"Kaotikus","glitch.preview":"Előnézet","glitch.previewInput":"Minta szöveg","glitch.previewPlaceholder":"Írd ide a próbaszöveget…","glitch.regenerate":"Újragenerálás","glitch.applySelection":"Alkalmazás kijelölésre","glitch.applyAll":"Alkalmazás az egész szövegre","glitch.noSelection":"Nincs kijelölt szöveg! Jelölj ki szöveget vagy használd az egész szöveg gombot.","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"A szerkesztő nem üres. Felülírod a tartalmat a minta szöveggel?","confirm.overwriteEmoji":"A :{name}: emoji már létezik. Felülírod?","alert.emojiNameRequired":"Add meg az emoji nevét! Csak betűk, számok és aláhúzás használható.","alert.emojiNameEmpty":"Add meg az emoji nevét!","alert.emojiLinkEmpty":"Add meg az emoji linkjét!","alert.webpOnly":"Csak .webp formátumú fájl tölthető fel!","alert.downloadFailed":`Nem sikerült letölteni az emojit: {error}

Lehet, hogy a szerver CORS miatt blokkolja a letöltést. Ilyenkor töltsd le kézzel, majd töltsd fel .webp fájlként.`,"alert.downloadHttp":"A letöltés sikertelen (HTTP {status})","alert.notImage":"A link nem képfájlra mutat.",sampleText:`# discOwUrd – Minta szöveg
-# Ez az alcím a -# subtext formázást mutatja be

## Szövegformázások
**Félkövér** · *Dőlt* · __Aláhúzás__ · ~~Áthúzás~~ · ||Spoiler – kattints az előnézetben!||
***Félkövér dőlt*** · __**Aláhúzott félkövér**__ · __*Aláhúzott dőlt*__ · __***Mindhárom együtt***__

### Kód és linkek
Inline kód: \`const discord = "formázó"\`
Kattintható link: [Discord Markdown útmutató](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`Szia, \${name}!\`;
}
\`\`\`

> Egysoros idézet – rövid gondolatok kiemelésére.

>>> Többsoros idézet első sora
minden sor ugyanabban a blokkban marad
így hosszabb szöveget is átadhatsz

## Lista példa
- Első listaelem
- Második elem *dőlt* szóval
- Harmadik elem **félkövér** kiemeléssel

### Egyedi emoji
Ha feltöltöttél emojit, így hivatkozhatsz rá: :monkas:
Szia, ez egy link: [ez a szöveg az](https://discord.com)`},en:{"app.title":"OwU","app.subtitle":"Create markdown text for Discord","lang.label":"Language","panel.editor":"Editor","panel.preview":"Preview","btn.sampleText":"Sample text","btn.sampleTextTitle":"Load sample text","btn.emojis":"Emojis","btn.emojisTitle":"Emojis","btn.copyText":"Copy Text","copy.copied":"Copied!","editor.placeholder":"Type your text here… Select text to show the formatting menu.","preview.empty":"Preview will appear here…","modal.emojis":"Emojis","modal.close":"Close","emoji.name":"Emoji name","emoji.namePlaceholder":"e.g. monkas","emoji.nameHint":"Appears in Discord as: <code>:name:</code>","emoji.upload":"Upload WebP emoji","emoji.uploadHint":"If the name field is empty, the filename will be suggested","emoji.link":"Emoji link","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"When a link is provided, Save downloads and stores the emoji.","emoji.save":"Save","emoji.downloading":"Downloading…","emoji.empty":"No emojis yet. Upload a .webp file or save one from a link!","emoji.insert":"Insert :{name}:","emoji.editLink":"Edit link","emoji.editLinkPrompt":"Emoji link URL:","emoji.delete":"Delete","emoji.deleteConfirm":"Delete :{name}: emoji?","format.placeholder":"text","link.defaultText":"this is the text","format.bold":"Bold (**text**)","format.italic":"Italic (*text*)","format.underline":"Underline (__text__)","format.boldItalic":"Bold italic (***text***)","format.underlineBold":"Underline bold","format.underlineItalic":"Underline italic","format.underlineBoldItalic":"Underline bold italic","format.strikethrough":"Strikethrough (~~text~~)","format.spoiler":"Spoiler (||text||)","format.code":"Code (`text`)","format.codeblock":"Code block","format.h1":"Large header (# text)","format.h2":"Medium header (## text)","format.h3":"Small header (### text)","format.subtext":"Subtext (-# text)","format.quote":"Quote (> text)","format.multiquote":"Multi-line quote (>>> first line only)","format.list":"List (- text)","format.link":"Link ([text](url))","format.glitch":"Glitch / Zalgo text","btn.glitch":"Glitch","btn.glitchTitle":"Glitch / Zalgo text generator","modal.glitch":"Glitch text","glitch.description":"Adds Unicode combining marks to text – zalgo effect you can paste into Discord.","glitch.intensity":"Intensity","glitch.level.mini":"Mild","glitch.level.normal":"Medium","glitch.level.max":"Strong","glitch.level.chaos":"Chaotic","glitch.preview":"Preview","glitch.previewInput":"Sample text","glitch.previewPlaceholder":"Type preview text here…","glitch.regenerate":"Regenerate","glitch.applySelection":"Apply to selection","glitch.applyAll":"Apply to entire text","glitch.noSelection":"No text selected! Select text or use the entire text button.","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"The editor is not empty. Overwrite with sample text?","confirm.overwriteEmoji":":{name}: emoji already exists. Overwrite?","alert.emojiNameRequired":"Enter an emoji name! Only letters, numbers and underscores allowed.","alert.emojiNameEmpty":"Enter the emoji name!","alert.emojiLinkEmpty":"Enter the emoji link!","alert.webpOnly":"Only .webp files can be uploaded!","alert.downloadFailed":`Failed to download emoji: {error}

The server may block downloads via CORS. Download manually and upload as .webp.`,"alert.downloadHttp":"Download failed (HTTP {status})","alert.notImage":"The link does not point to an image file.",sampleText:`# discOwUrd – Sample Text
-# This subtext demonstrates the -# subtext format

## Text formatting
**Bold** · *Italic* · __Underline__ · ~~Strikethrough~~ · ||Spoiler – click in preview!||
***Bold italic*** · __**Underline bold**__ · __*Underline italic*__ · __***All three combined***__

### Code and links
Inline code: \`const discord = "formatter"\`
Clickable link: [Discord Markdown guide](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

> Single-line quote – great for short highlights.

>>> Multi-line quote first line
every line stays in the same block
so you can share longer thoughts

## List example
- First list item
- Second item with *italic* word
- Third item with **bold** emphasis

### Custom emoji
If you uploaded an emoji, reference it like: :monkas:
Hi, here is a link: [this is the text](https://discord.com)`},de:{"app.title":"OwU","app.subtitle":"Markdown-Text für Discord erstellen","lang.label":"Sprache","panel.editor":"Editor","panel.preview":"Vorschau","btn.sampleText":"Beispieltext","btn.sampleTextTitle":"Beispieltext laden","btn.emojis":"Emojis","btn.emojisTitle":"Emojis","btn.copyText":"Text kopieren","copy.copied":"Kopiert!","editor.placeholder":"Text hier eingeben… Text markieren für das Formatierungsmenü.","preview.empty":"Vorschau erscheint hier…","modal.emojis":"Emojis","modal.close":"Schließen","emoji.name":"Emoji-Name","emoji.namePlaceholder":"z.B. monkas","emoji.nameHint":"Erscheint in Discord als: <code>:name:</code>","emoji.upload":"WebP-Emoji hochladen","emoji.uploadHint":"Wenn das Namensfeld leer ist, wird der Dateiname vorgeschlagen","emoji.link":"Emoji-Link","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"Mit Link lädt Speichern das Emoji herunter und speichert es.","emoji.save":"Speichern","emoji.downloading":"Wird heruntergeladen…","emoji.empty":"Noch keine Emojis. Lade eine .webp-Datei hoch oder speichere per Link!","emoji.insert":":{name}: einfügen","emoji.editLink":"Link bearbeiten","emoji.editLinkPrompt":"Emoji-Link-URL:","emoji.delete":"Löschen","emoji.deleteConfirm":":{name}: Emoji löschen?","format.placeholder":"Text","link.defaultText":"dieser Text","format.bold":"Fett (**text**)","format.italic":"Kursiv (*text*)","format.underline":"Unterstrichen (__text__)","format.boldItalic":"Fett kursiv (***text***)","format.underlineBold":"Unterstrichen fett","format.underlineItalic":"Unterstrichen kursiv","format.underlineBoldItalic":"Unterstrichen fett kursiv","format.strikethrough":"Durchgestrichen (~~text~~)","format.spoiler":"Spoiler (||text||)","format.code":"Code (`text`)","format.codeblock":"Codeblock","format.h1":"Große Überschrift (# text)","format.h2":"Mittlere Überschrift (## text)","format.h3":"Kleine Überschrift (### text)","format.subtext":"Untertitel (-# text)","format.quote":"Zitat (> text)","format.multiquote":"Mehrzeiliges Zitat (>>> text)","format.list":"Liste (- text)","format.link":"Link ([text](url))","format.glitch":"Glitch / Zalgo-Text","btn.glitch":"Glitch","btn.glitchTitle":"Glitch / Zalgo-Textgenerator","modal.glitch":"Glitch-Text","glitch.description":"Fügt Unicode-Kombinationszeichen hinzu – Zalgo-Effekt für Discord.","glitch.intensity":"Intensität","glitch.level.mini":"Leicht","glitch.level.normal":"Mittel","glitch.level.max":"Stark","glitch.level.chaos":"Chaotisch","glitch.preview":"Vorschau","glitch.previewInput":"Beispieltext","glitch.previewPlaceholder":"Vorschautext hier eingeben…","glitch.regenerate":"Neu generieren","glitch.applySelection":"Auf Auswahl anwenden","glitch.applyAll":"Auf gesamten Text anwenden","glitch.noSelection":"Kein Text ausgewählt! Text markieren oder gesamten Text verwenden.","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"Der Editor ist nicht leer. Mit Beispieltext überschreiben?","confirm.overwriteEmoji":":{name}: Emoji existiert bereits. Überschreiben?","alert.emojiNameRequired":"Emoji-Namen eingeben! Nur Buchstaben, Zahlen und Unterstriche.","alert.emojiNameEmpty":"Emoji-Namen eingeben!","alert.emojiLinkEmpty":"Emoji-Link eingeben!","alert.webpOnly":"Nur .webp-Dateien können hochgeladen werden!","alert.downloadFailed":`Emoji konnte nicht heruntergeladen werden: {error}

Der Server blockiert möglicherweise per CORS. Manuell herunterladen und als .webp hochladen.`,"alert.downloadHttp":"Download fehlgeschlagen (HTTP {status})","alert.notImage":"Der Link zeigt nicht auf eine Bilddatei.",sampleText:`# discOwUrd – Beispieltext
-# Dieser Untertitel zeigt das -# Subtext-Format

## Textformatierung
**Fett** · *Kursiv* · __Unterstrichen__ · ~~Durchgestrichen~~ · ||Spoiler – in Vorschau klicken!||
***Fett kursiv*** · __**Unterstrichen fett**__ · __*Unterstrichen kursiv*__ · __***Alle drei kombiniert***__

### Code und Links
Inline-Code: \`const discord = "formatierer"\`
Klickbarer Link: [Discord Markdown-Anleitung](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`Hallo, \${name}!\`;
}
\`\`\`

> Einzeiliges Zitat – ideal für kurze Hervorhebungen.

>>> Mehrzeiliges Zitat erste Zeile
jede Zeile bleibt im selben Block
für längere Gedanken

## Listenbeispiel
- Erstes Listenelement
- Zweites Element mit *kursivem* Wort
- Drittes Element mit **fetter** Betonung

### Eigenes Emoji
Bei hochgeladenem Emoji so referenzieren: :monkas:
Hallo, hier ein Link: [dieser Text](https://discord.com)`},es:{"app.title":"OwU","app.subtitle":"Crea texto markdown para Discord","lang.label":"Idioma","panel.editor":"Editor","panel.preview":"Vista previa","btn.sampleText":"Texto de ejemplo","btn.sampleTextTitle":"Cargar texto de ejemplo","btn.emojis":"Emojis","btn.emojisTitle":"Emojis","btn.copyText":"Copiar texto","copy.copied":"¡Copiado!","editor.placeholder":"Escribe aquí… Selecciona texto para ver el menú de formato.","preview.empty":"La vista previa aparecerá aquí…","modal.emojis":"Emojis","modal.close":"Cerrar","emoji.name":"Nombre del emoji","emoji.namePlaceholder":"ej. monkas","emoji.nameHint":"Aparece en Discord como: <code>:nombre:</code>","emoji.upload":"Subir emoji WebP","emoji.uploadHint":"Si el nombre está vacío, se sugerirá el nombre del archivo","emoji.link":"Enlace del emoji","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"Con un enlace, Guardar descarga y guarda el emoji.","emoji.save":"Guardar","emoji.downloading":"Descargando…","emoji.empty":"Sin emojis aún. ¡Sube un .webp o guarda uno desde un enlace!","emoji.insert":"Insertar :{name}:","emoji.editLink":"Editar enlace","emoji.editLinkPrompt":"URL del enlace del emoji:","emoji.delete":"Eliminar","emoji.deleteConfirm":"¿Eliminar el emoji :{name}:?","format.placeholder":"texto","link.defaultText":"este es el texto","format.bold":"Negrita (**text**)","format.italic":"Cursiva (*text*)","format.underline":"Subrayado (__text__)","format.boldItalic":"Negrita cursiva (***text***)","format.underlineBold":"Subrayado negrita","format.underlineItalic":"Subrayado cursiva","format.underlineBoldItalic":"Subrayado negrita cursiva","format.strikethrough":"Tachado (~~text~~)","format.spoiler":"Spoiler (||text||)","format.code":"Código (`text`)","format.codeblock":"Bloque de código","format.h1":"Encabezado grande (# text)","format.h2":"Encabezado mediano (## text)","format.h3":"Encabezado pequeño (### text)","format.subtext":"Subtexto (-# text)","format.quote":"Cita (> text)","format.multiquote":"Cita multilínea (>>> text)","format.list":"Lista (- text)","format.link":"Enlace ([text](url))","format.glitch":"Texto glitch / zalgo","btn.glitch":"Glitch","btn.glitchTitle":"Generador de texto glitch / zalgo","modal.glitch":"Texto glitch","glitch.description":"Añade marcas Unicode combinadas – efecto zalgo para Discord.","glitch.intensity":"Intensidad","glitch.level.mini":"Suave","glitch.level.normal":"Medio","glitch.level.max":"Fuerte","glitch.level.chaos":"Caótico","glitch.preview":"Vista previa","glitch.previewInput":"Texto de ejemplo","glitch.previewPlaceholder":"Escribe el texto de prueba…","glitch.regenerate":"Regenerar","glitch.applySelection":"Aplicar a selección","glitch.applyAll":"Aplicar a todo el texto","glitch.noSelection":"¡Sin texto seleccionado! Selecciona texto o usa todo el texto.","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"El editor no está vacío. ¿Sobrescribir con el texto de ejemplo?","confirm.overwriteEmoji":"El emoji :{name}: ya existe. ¿Sobrescribir?","alert.emojiNameRequired":"¡Introduce un nombre! Solo letras, números y guiones bajos.","alert.emojiNameEmpty":"¡Introduce el nombre del emoji!","alert.emojiLinkEmpty":"¡Introduce el enlace del emoji!","alert.webpOnly":"¡Solo se pueden subir archivos .webp!","alert.downloadFailed":`No se pudo descargar el emoji: {error}

El servidor puede bloquear por CORS. Descarga manualmente y sube como .webp.`,"alert.downloadHttp":"Descarga fallida (HTTP {status})","alert.notImage":"El enlace no apunta a un archivo de imagen.",sampleText:`# discOwUrd – Texto de ejemplo
-# Este subtítulo muestra el formato -# subtext

## Formato de texto
**Negrita** · *Cursiva* · __Subrayado__ · ~~Tachado~~ · ||Spoiler – ¡clic en vista previa!||
***Negrita cursiva*** · __**Subrayado negrita**__ · __*Subrayado cursiva*__ · __***Los tres combinados***__

### Código y enlaces
Código inline: \`const discord = "formateador"\`
Enlace clicable: [Guía Markdown de Discord](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`Hola, \${name}!\`;
}
\`\`\`

> Cita de una línea – ideal para destacar ideas breves.

>>> Primera línea de cita multilínea
cada línea permanece en el mismo bloque
para compartir textos más largos

## Ejemplo de lista
- Primer elemento
- Segundo con palabra en *cursiva*
- Tercero con énfasis en **negrita**

### Emoji personalizado
Si subiste un emoji, refiérelo así: :monkas:
Hola, aquí un enlace: [este es el texto](https://discord.com)`},ru:{"app.title":"OwU","app.subtitle":"Создание markdown-текста для Discord","lang.label":"Язык","panel.editor":"Редактор","panel.preview":"Предпросмотр","btn.sampleText":"Пример текста","btn.sampleTextTitle":"Загрузить пример текста","btn.emojis":"Эмодзи","btn.emojisTitle":"Эмодзи","btn.copyText":"Копировать текст","copy.copied":"Скопировано!","editor.placeholder":"Введите текст… Выделите текст для меню форматирования.","preview.empty":"Предпросмотр появится здесь…","modal.emojis":"Эмодзи","modal.close":"Закрыть","emoji.name":"Имя эмодзи","emoji.namePlaceholder":"напр. monkas","emoji.nameHint":"В Discord отображается как: <code>:имя:</code>","emoji.upload":"Загрузить WebP эмодзи","emoji.uploadHint":"Если имя пустое, будет предложено имя файла","emoji.link":"Ссылка на эмодзи","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"При указании ссылки кнопка Сохранить скачает и сохранит эмодзи.","emoji.save":"Сохранить","emoji.downloading":"Загрузка…","emoji.empty":"Эмодзи пока нет. Загрузите .webp или сохраните по ссылке!","emoji.insert":"Вставить :{name}:","emoji.editLink":"Редактировать ссылку","emoji.editLinkPrompt":"URL ссылки эмодзи:","emoji.delete":"Удалить","emoji.deleteConfirm":"Удалить эмодзи :{name}:?","format.placeholder":"текст","link.defaultText":"этот текст","format.bold":"Жирный (**text**)","format.italic":"Курсив (*text*)","format.underline":"Подчёркнутый (__text__)","format.boldItalic":"Жирный курсив (***text***)","format.underlineBold":"Подчёркнутый жирный","format.underlineItalic":"Подчёркнутый курсив","format.underlineBoldItalic":"Подчёркнутый жирный курсив","format.strikethrough":"Зачёркнутый (~~text~~)","format.spoiler":"Спойлер (||text||)","format.code":"Код (`text`)","format.codeblock":"Блок кода","format.h1":"Большой заголовок (# text)","format.h2":"Средний заголовок (## text)","format.h3":"Маленький заголовок (### text)","format.subtext":"Подзаголовок (-# text)","format.quote":"Цитата (> text)","format.multiquote":"Многострочная цитата (>>> text)","format.list":"Список (- text)","format.link":"Ссылка ([text](url))","format.glitch":"Глитч / zalgo текст","btn.glitch":"Глитч","btn.glitchTitle":"Генератор глитч / zalgo текста","modal.glitch":"Глитч текст","glitch.description":"Добавляет комбинируемые Unicode-символы – zalgo-эффект для Discord.","glitch.intensity":"Интенсивность","glitch.level.mini":"Слабый","glitch.level.normal":"Средний","glitch.level.max":"Сильный","glitch.level.chaos":"Хаотичный","glitch.preview":"Предпросмотр","glitch.previewInput":"Пример текста","glitch.previewPlaceholder":"Введите текст для пробы…","glitch.regenerate":"Перегенерировать","glitch.applySelection":"Применить к выделению","glitch.applyAll":"Применить ко всему тексту","glitch.noSelection":"Текст не выделен! Выделите текст или примените ко всему.","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"Редактор не пуст. Перезаписать примером текста?","confirm.overwriteEmoji":"Эмодзи :{name}: уже существует. Перезаписать?","alert.emojiNameRequired":"Введите имя эмодзи! Только буквы, цифры и подчёркивания.","alert.emojiNameEmpty":"Введите имя эмодзи!","alert.emojiLinkEmpty":"Введите ссылку на эмодзи!","alert.webpOnly":"Можно загружать только файлы .webp!","alert.downloadFailed":`Не удалось скачать эмодзи: {error}

Сервер может блокировать через CORS. Скачайте вручную и загрузите как .webp.`,"alert.downloadHttp":"Ошибка загрузки (HTTP {status})","alert.notImage":"Ссылка не ведёт на файл изображения.",sampleText:`# discOwUrd – Пример текста
-# Этот подзаголовок демонстрирует формат -# subtext

## Форматирование текста
**Жирный** · *Курсив* · __Подчёркнутый__ · ~~Зачёркнутый~~ · ||Спойлер – нажмите в предпросмотре!||
***Жирный курсив*** · __**Подчёркнутый жирный**__ · __*Подчёркнутый курсив*__ · __***Все три вместе***__

### Код и ссылки
Встроенный код: \`const discord = "форматтер"\`
Кликабельная ссылка: [Руководство Markdown Discord](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`Привет, \${name}!\`;
}
\`\`\`

> Однострочная цитата – для коротких мыслей.

>>> Первая строка многострочной цитаты
каждая строка остаётся в одном блоке
для более длинных текстов

## Пример списка
- Первый элемент
- Второй с *курсивным* словом
- Третий с **жирным** выделением

### Свой эмодзи
Если загрузили эмодзи, ссылайтесь так: :monkas:
Привет, вот ссылка: [этот текст](https://discord.com)`},pl:{"app.title":"OwU","app.subtitle":"Twórz tekst markdown dla Discord","lang.label":"Język","panel.editor":"Edytor","panel.preview":"Podgląd","btn.sampleText":"Przykładowy tekst","btn.sampleTextTitle":"Załaduj przykładowy tekst","btn.emojis":"Emoji","btn.emojisTitle":"Emoji","btn.copyText":"Kopiuj tekst","copy.copied":"Skopiowano!","editor.placeholder":"Wpisz tekst tutaj… Zaznacz tekst, aby pokazać menu formatowania.","preview.empty":"Podgląd pojawi się tutaj…","modal.emojis":"Emoji","modal.close":"Zamknij","emoji.name":"Nazwa emoji","emoji.namePlaceholder":"np. monkas","emoji.nameHint":"W Discordzie wyświetla się jako: <code>:nazwa:</code>","emoji.upload":"Prześlij emoji WebP","emoji.uploadHint":"Jeśli pole nazwy jest puste, zostanie zasugerowana nazwa pliku","emoji.link":"Link do emoji","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"Po podaniu linku przycisk Zapisz pobierze i zapisze emoji.","emoji.save":"Zapisz","emoji.downloading":"Pobieranie…","emoji.empty":"Brak emoji. Prześlij plik .webp lub zapisz z linku!","emoji.insert":"Wstaw :{name}:","emoji.editLink":"Edytuj link","emoji.editLinkPrompt":"URL linku emoji:","emoji.delete":"Usuń","emoji.deleteConfirm":"Usunąć emoji :{name}:?","format.placeholder":"tekst","link.defaultText":"ten tekst","format.bold":"Pogrubienie (**text**)","format.italic":"Kursywa (*text*)","format.underline":"Podkreślenie (__text__)","format.boldItalic":"Pogrubiona kursywa (***text***)","format.underlineBold":"Podkreślone pogrubienie","format.underlineItalic":"Podkreślona kursywa","format.underlineBoldItalic":"Podkreślone pogrubiona kursywa","format.strikethrough":"Przekreślenie (~~text~~)","format.spoiler":"Spoiler (||text||)","format.code":"Kod (`text`)","format.codeblock":"Blok kodu","format.h1":"Duży nagłówek (# text)","format.h2":"Średni nagłówek (## text)","format.h3":"Mały nagłówek (### text)","format.subtext":"Podtytuł (-# text)","format.quote":"Cytat (> text)","format.multiquote":"Cytat wieloliniowy (>>> text)","format.list":"Lista (- text)","format.link":"Link ([text](url))","format.glitch":"Tekst glitch / zalgo","btn.glitch":"Glitch","btn.glitchTitle":"Generator tekstu glitch / zalgo","modal.glitch":"Tekst glitch","glitch.description":"Dodaje łączące znaki Unicode – efekt zalgo do Discorda.","glitch.intensity":"Intensywność","glitch.level.mini":"Łagodny","glitch.level.normal":"Średni","glitch.level.max":"Mocny","glitch.level.chaos":"Chaotyczny","glitch.preview":"Podgląd","glitch.previewInput":"Przykładowy tekst","glitch.previewPlaceholder":"Wpisz tekst testowy…","glitch.regenerate":"Wygeneruj ponownie","glitch.applySelection":"Zastosuj do zaznaczenia","glitch.applyAll":"Zastosuj do całego tekstu","glitch.noSelection":"Brak zaznaczenia! Zaznacz tekst lub użyj całego tekstu.","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"Edytor nie jest pusty. Nadpisać przykładowym tekstem?","confirm.overwriteEmoji":"Emoji :{name}: już istnieje. Nadpisać?","alert.emojiNameRequired":"Podaj nazwę emoji! Tylko litery, cyfry i podkreślenia.","alert.emojiNameEmpty":"Podaj nazwę emoji!","alert.emojiLinkEmpty":"Podaj link do emoji!","alert.webpOnly":"Można przesyłać tylko pliki .webp!","alert.downloadFailed":`Nie udało się pobrać emoji: {error}

Serwer może blokować przez CORS. Pobierz ręcznie i prześlij jako .webp.`,"alert.downloadHttp":"Pobieranie nieudane (HTTP {status})","alert.notImage":"Link nie wskazuje na plik obrazu.",sampleText:`# discOwUrd – Przykładowy tekst
-# Ten podtytuł pokazuje format -# subtext

## Formatowanie tekstu
**Pogrubienie** · *Kursywa* · __Podkreślenie__ · ~~Przekreślenie~~ · ||Spoiler – kliknij w podglądzie!||
***Pogrubiona kursywa*** · __**Podkreślone pogrubienie**__ · __*Podkreślona kursywa*__ · __***Wszystkie trzy razem***__

### Kod i linki
Kod inline: \`const discord = "formater"\`
Klikalny link: [Przewodnik Markdown Discord](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`Cześć, \${name}!\`;
}
\`\`\`

> Jednoliniowy cytat – do krótkich myśli.

>>> Pierwsza linia cytatu wieloliniowego
każda linia pozostaje w tym samym bloku
do dłuższych tekstów

## Przykład listy
- Pierwszy element
- Drugi ze słowem *kursywą*
- Trzeci z **pogrubieniem**

### Własne emoji
Jeśli przesłałeś emoji, odwołuj się tak: :monkas:
Cześć, oto link: [ten tekst](https://discord.com)`},ja:{"app.title":"OwU","app.subtitle":"Discord用マークダウンテキストを作成","lang.label":"言語","panel.editor":"エディター","panel.preview":"プレビュー","btn.sampleText":"サンプルテキスト","btn.sampleTextTitle":"サンプルテキストを読み込む","btn.emojis":"絵文字","btn.emojisTitle":"絵文字","btn.copyText":"テキストをコピー","copy.copied":"コピーしました！","editor.placeholder":"ここにテキストを入力… 選択すると書式メニューが表示されます。","preview.empty":"プレビューはここに表示されます…","modal.emojis":"絵文字","modal.close":"閉じる","emoji.name":"絵文字名","emoji.namePlaceholder":"例: monkas","emoji.nameHint":"Discordでは次のように表示: <code>:名前:</code>","emoji.upload":"WebP絵文字をアップロード","emoji.uploadHint":"名前が空の場合、ファイル名が提案されます","emoji.link":"絵文字リンク","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"リンクを指定すると、保存ボタンで絵文字をダウンロードして保存します。","emoji.save":"保存","emoji.downloading":"ダウンロード中…","emoji.empty":"絵文字がありません。.webpをアップロードするか、リンクから保存してください！","emoji.insert":":{name}: を挿入","emoji.editLink":"リンクを編集","emoji.editLinkPrompt":"絵文字リンクURL:","emoji.delete":"削除","emoji.deleteConfirm":":{name}: 絵文字を削除しますか？","format.placeholder":"テキスト","link.defaultText":"このテキスト","format.bold":"太字 (**text**)","format.italic":"斜体 (*text*)","format.underline":"下線 (__text__)","format.boldItalic":"太字斜体 (***text***)","format.underlineBold":"下線太字","format.underlineItalic":"下線斜体","format.underlineBoldItalic":"下線太字斜体","format.strikethrough":"取り消し線 (~~text~~)","format.spoiler":"スポイラー (||text||)","format.code":"コード (`text`)","format.codeblock":"コードブロック","format.h1":"大見出し (# text)","format.h2":"中見出し (## text)","format.h3":"小見出し (### text)","format.subtext":"サブテキスト (-# text)","format.quote":"引用 (> text)","format.multiquote":"複数行引用 (>>> text)","format.list":"リスト (- text)","format.link":"リンク ([text](url))","format.glitch":"グリッチ / ザルゴテキスト","btn.glitch":"Glitch","btn.glitchTitle":"グリッチ / ザルゴテキスト生成","modal.glitch":"グリッチテキスト","glitch.description":"Unicode結合文字を追加 – Discordに貼れるザルゴ効果。","glitch.intensity":"強度","glitch.level.mini":"弱","glitch.level.normal":"中","glitch.level.max":"強","glitch.level.chaos":"混沌","glitch.preview":"プレビュー","glitch.previewInput":"サンプルテキスト","glitch.previewPlaceholder":"プレビューテキストを入力…","glitch.regenerate":"再生成","glitch.applySelection":"選択範囲に適用","glitch.applyAll":"全文に適用","glitch.noSelection":"テキストが選択されていません！選択するか全文ボタンを使用。","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"エディターは空ではありません。サンプルテキストで上書きしますか？","confirm.overwriteEmoji":":{name}: 絵文字は既に存在します。上書きしますか？","alert.emojiNameRequired":"絵文字名を入力してください！英数字とアンダースコアのみ。","alert.emojiNameEmpty":"絵文字名を入力してください！","alert.emojiLinkEmpty":"絵文字リンクを入力してください！","alert.webpOnly":".webpファイルのみアップロードできます！","alert.downloadFailed":`絵文字のダウンロードに失敗: {error}

CORSでブロックされている可能性があります。手動でダウンロードして.webpとしてアップロードしてください。`,"alert.downloadHttp":"ダウンロード失敗 (HTTP {status})","alert.notImage":"リンクは画像ファイルを指していません。",sampleText:`# discOwUrd – サンプルテキスト
-# このサブテキストは -# subtext 形式を示します

## テキスト書式
**太字** · *斜体* · __下線__ · ~~取り消し線~~ · ||スポイラー – プレビューでクリック!||
***太字斜体*** · __**下線太字**__ · __*下線斜体*__ · __***3つすべて***__

### コードとリンク
インラインコード: \`const discord = "フォーマッター"\`
クリック可能なリンク: [Discord Markdownガイド](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`こんにちは、\${name}!\`;
}
\`\`\`

> 1行引用 – 短い強調に最適。

>>> 複数行引用の1行目
各行は同じブロックに留まります
長いテキストの共有に

## リスト例
- 最初の項目
- *斜体*の単語がある2番目
- **太字**の強調がある3番目

### カスタム絵文字
絵文字をアップロードした場合: :monkas:
こんにちは、リンクです: [このテキスト](https://discord.com)`},zh:{"app.title":"OwU","app.subtitle":"为 Discord 创建 Markdown 文本","lang.label":"语言","panel.editor":"编辑器","panel.preview":"预览","btn.sampleText":"示例文本","btn.sampleTextTitle":"加载示例文本","btn.emojis":"表情","btn.emojisTitle":"表情","btn.copyText":"复制文本","copy.copied":"已复制！","editor.placeholder":"在此输入文本… 选择文本以显示格式菜单。","preview.empty":"预览将显示在这里…","modal.emojis":"表情","modal.close":"关闭","emoji.name":"表情名称","emoji.namePlaceholder":"例如 monkas","emoji.nameHint":"在 Discord 中显示为：<code>:名称:</code>","emoji.upload":"上传 WebP 表情","emoji.uploadHint":"如果名称为空，将建议文件名","emoji.link":"表情链接","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"提供链接后，保存按钮将下载并存储表情。","emoji.save":"保存","emoji.downloading":"下载中…","emoji.empty":"还没有表情。上传 .webp 文件或从链接保存！","emoji.insert":"插入 :{name}:","emoji.editLink":"编辑链接","emoji.editLinkPrompt":"表情链接 URL：","emoji.delete":"删除","emoji.deleteConfirm":"删除 :{name}: 表情？","format.placeholder":"文本","link.defaultText":"这段文字","format.bold":"粗体 (**text**)","format.italic":"斜体 (*text*)","format.underline":"下划线 (__text__)","format.boldItalic":"粗斜体 (***text***)","format.underlineBold":"下划线粗体","format.underlineItalic":"下划线斜体","format.underlineBoldItalic":"下划线粗斜体","format.strikethrough":"删除线 (~~text~~)","format.spoiler":"剧透 (||text||)","format.code":"代码 (`text`)","format.codeblock":"代码块","format.h1":"大标题 (# text)","format.h2":"中标题 (## text)","format.h3":"小标题 (### text)","format.subtext":"副标题 (-# text)","format.quote":"引用 (> text)","format.multiquote":"多行引用 (>>> text)","format.list":"列表 (- text)","format.link":"链接 ([text](url))","format.glitch":"故障 / Zalgo 文本","btn.glitch":"Glitch","btn.glitchTitle":"故障 / Zalgo 文本生成器","modal.glitch":"故障文本","glitch.description":"添加 Unicode 组合字符 – 可粘贴到 Discord 的 zalgo 效果。","glitch.intensity":"强度","glitch.level.mini":"轻微","glitch.level.normal":"中等","glitch.level.max":"强烈","glitch.level.chaos":"混沌","glitch.preview":"预览","glitch.previewInput":"示例文本","glitch.previewPlaceholder":"在此输入预览文本…","glitch.regenerate":"重新生成","glitch.applySelection":"应用到选中内容","glitch.applyAll":"应用到全部文本","glitch.noSelection":"未选中文本！请选择文本或使用全部文本按钮。","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"编辑器不为空。用示例文本覆盖？","confirm.overwriteEmoji":":{name}: 表情已存在。覆盖？","alert.emojiNameRequired":"请输入表情名称！仅允许字母、数字和下划线。","alert.emojiNameEmpty":"请输入表情名称！","alert.emojiLinkEmpty":"请输入表情链接！","alert.webpOnly":"只能上传 .webp 文件！","alert.downloadFailed":`无法下载表情：{error}

服务器可能因 CORS 阻止下载。请手动下载并以 .webp 上传。`,"alert.downloadHttp":"下载失败 (HTTP {status})","alert.notImage":"链接未指向图像文件。",sampleText:`# discOwUrd – 示例文本
-# 此副标题展示 -# subtext 格式

## 文本格式
**粗体** · *斜体* · __下划线__ · ~~删除线~~ · ||剧透 – 在预览中点击!||
***粗斜体*** · __**下划线粗体**__ · __*下划线斜体*__ · __***三者结合***__

### 代码和链接
行内代码: \`const discord = "格式化"\`
可点击链接: [Discord Markdown 指南](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`你好，\${name}!\`;
}
\`\`\`

> 单行引用 – 适合简短强调。

>>> 多行引用第一行
每行保持在同一块中
可分享较长文本

## 列表示例
- 第一项
- 第二项含*斜体*词
- 第三项含**粗体**强调

### 自定义表情
如果上传了表情，这样引用: :monkas:
你好，这是一个链接: [这段文字](https://discord.com)`},ko:{"app.title":"OwU","app.subtitle":"Discord용 마크다운 텍스트 만들기","lang.label":"언어","panel.editor":"편집기","panel.preview":"미리보기","btn.sampleText":"샘플 텍스트","btn.sampleTextTitle":"샘플 텍스트 불러오기","btn.emojis":"이모지","btn.emojisTitle":"이모지","btn.copyText":"텍스트 복사","copy.copied":"복사됨!","editor.placeholder":"여기에 텍스트를 입력하세요… 선택하면 서식 메뉴가 표시됩니다.","preview.empty":"미리보기가 여기에 표시됩니다…","modal.emojis":"이모지","modal.close":"닫기","emoji.name":"이모지 이름","emoji.namePlaceholder":"예: monkas","emoji.nameHint":"Discord에서 표시: <code>:이름:</code>","emoji.upload":"WebP 이모지 업로드","emoji.uploadHint":"이름이 비어 있으면 파일명이 제안됩니다","emoji.link":"이모지 링크","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"링크를 입력하면 저장 버튼이 이모지를 다운로드하여 저장합니다.","emoji.save":"저장","emoji.downloading":"다운로드 중…","emoji.empty":"이모지가 없습니다. .webp 파일을 업로드하거나 링크에서 저장하세요!","emoji.insert":":{name}: 삽입","emoji.editLink":"링크 편집","emoji.editLinkPrompt":"이모지 링크 URL:","emoji.delete":"삭제","emoji.deleteConfirm":":{name}: 이모지를 삭제할까요?","format.placeholder":"텍스트","link.defaultText":"이 텍스트","format.bold":"굵게 (**text**)","format.italic":"기울임 (*text*)","format.underline":"밑줄 (__text__)","format.boldItalic":"굵은 기울임 (***text***)","format.underlineBold":"밑줄 굵게","format.underlineItalic":"밑줄 기울임","format.underlineBoldItalic":"밑줄 굵은 기울임","format.strikethrough":"취소선 (~~text~~)","format.spoiler":"스포일러 (||text||)","format.code":"코드 (`text`)","format.codeblock":"코드 블록","format.h1":"큰 제목 (# text)","format.h2":"중간 제목 (## text)","format.h3":"작은 제목 (### text)","format.subtext":"부제 (-# text)","format.quote":"인용 (> text)","format.multiquote":"여러 줄 인용 (>>> text)","format.list":"목록 (- text)","format.link":"링크 ([text](url))","format.glitch":"글리치 / 잘고 텍스트","btn.glitch":"Glitch","btn.glitchTitle":"글리치 / 잘고 텍스트 생성기","modal.glitch":"글리치 텍스트","glitch.description":"Unicode 결합 문자를 추가 – Discord에 붙여넣을 수 있는 잘고 효과.","glitch.intensity":"강도","glitch.level.mini":"약함","glitch.level.normal":"보통","glitch.level.max":"강함","glitch.level.chaos":"혼돈","glitch.preview":"미리보기","glitch.previewInput":"샘플 텍스트","glitch.previewPlaceholder":"미리보기 텍스트 입력…","glitch.regenerate":"다시 생성","glitch.applySelection":"선택 영역에 적용","glitch.applyAll":"전체 텍스트에 적용","glitch.noSelection":"선택된 텍스트가 없습니다! 텍스트를 선택하거나 전체 텍스트 버튼을 사용하세요.","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"편집기가 비어 있지 않습니다. 샘플 텍스트로 덮어쓸까요?","confirm.overwriteEmoji":":{name}: 이모지가 이미 있습니다. 덮어쓸까요?","alert.emojiNameRequired":"이모지 이름을 입력하세요! 문자, 숫자, 밑줄만 가능합니다.","alert.emojiNameEmpty":"이모지 이름을 입력하세요!","alert.emojiLinkEmpty":"이모지 링크를 입력하세요!","alert.webpOnly":".webp 파일만 업로드할 수 있습니다!","alert.downloadFailed":`이모지 다운로드 실패: {error}

CORS로 차단되었을 수 있습니다. 수동으로 다운로드 후 .webp로 업로드하세요.`,"alert.downloadHttp":"다운로드 실패 (HTTP {status})","alert.notImage":"링크가 이미지 파일을 가리키지 않습니다.",sampleText:`# discOwUrd – 샘플 텍스트
-# 이 부제는 -# subtext 형식을 보여줍니다

## 텍스트 서식
**굵게** · *기울임* · __밑줄__ · ~~취소선~~ · ||스포일러 – 미리보기에서 클릭!||
***굵은 기울임*** · __**밑줄 굵게**__ · __*밑줄 기울임*__ · __***세 가지 결합***__

### 코드 및 링크
인라인 코드: \`const discord = "포맷터"\`
클릭 가능한 링크: [Discord Markdown 가이드](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`안녕, \${name}!\`;
}
\`\`\`

> 한 줄 인용 – 짧은 강조에 적합.

>>> 여러 줄 인용 첫 줄
각 줄은 같은 블록에 유지됩니다
긴 텍스트 공유에

## 목록 예시
- 첫 번째 항목
- *기울임* 단어가 있는 두 번째
- **굵게** 강조가 있는 세 번째

### 커스텀 이모지
이모지를 업로드했다면 이렇게 참조: :monkas:
안녕, 링크입니다: [이 텍스트](https://discord.com)`},tr:{"app.title":"OwU","app.subtitle":"Discord için markdown metni oluştur","lang.label":"Dil","panel.editor":"Düzenleyici","panel.preview":"Önizleme","btn.sampleText":"Örnek metin","btn.sampleTextTitle":"Örnek metni yükle","btn.emojis":"Emojiler","btn.emojisTitle":"Emojiler","btn.copyText":"Metni kopyala","copy.copied":"Kopyalandı!","editor.placeholder":"Metni buraya yazın… Biçim menüsü için metin seçin.","preview.empty":"Önizleme burada görünecek…","modal.emojis":"Emojiler","modal.close":"Kapat","emoji.name":"Emoji adı","emoji.namePlaceholder":"örn. monkas","emoji.nameHint":"Discord'da şöyle görünür: <code>:ad:</code>","emoji.upload":"WebP emoji yükle","emoji.uploadHint":"Ad alanı boşsa dosya adı önerilir","emoji.link":"Emoji bağlantısı","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"Bağlantı verildiğinde Kaydet emojiyi indirir ve saklar.","emoji.save":"Kaydet","emoji.downloading":"İndiriliyor…","emoji.empty":"Henüz emoji yok. .webp yükleyin veya bağlantıdan kaydedin!","emoji.insert":":{name}: ekle","emoji.editLink":"Bağlantıyı düzenle","emoji.editLinkPrompt":"Emoji bağlantı URL:","emoji.delete":"Sil","emoji.deleteConfirm":":{name}: emojisi silinsin mi?","format.placeholder":"metin","link.defaultText":"bu metin","format.bold":"Kalın (**text**)","format.italic":"İtalik (*text*)","format.underline":"Altı çizili (__text__)","format.boldItalic":"Kalın italik (***text***)","format.underlineBold":"Altı çizili kalın","format.underlineItalic":"Altı çizili italik","format.underlineBoldItalic":"Altı çizili kalın italik","format.strikethrough":"Üstü çizili (~~text~~)","format.spoiler":"Spoiler (||text||)","format.code":"Kod (`text`)","format.codeblock":"Kod bloğu","format.h1":"Büyük başlık (# text)","format.h2":"Orta başlık (## text)","format.h3":"Küçük başlık (### text)","format.subtext":"Alt metin (-# text)","format.quote":"Alıntı (> text)","format.multiquote":"Çok satırlı alıntı (>>> text)","format.list":"Liste (- text)","format.link":"Bağlantı ([text](url))","format.glitch":"Glitch / Zalgo metin","btn.glitch":"Glitch","btn.glitchTitle":"Glitch / Zalgo metin oluşturucu","modal.glitch":"Glitch metin","glitch.description":"Unicode birleştirme işaretleri ekler – Discord için zalgo efekti.","glitch.intensity":"Yoğunluk","glitch.level.mini":"Hafif","glitch.level.normal":"Orta","glitch.level.max":"Güçlü","glitch.level.chaos":"Kaotik","glitch.preview":"Önizleme","glitch.previewInput":"Örnek metin","glitch.previewPlaceholder":"Önizleme metnini yazın…","glitch.regenerate":"Yeniden oluştur","glitch.applySelection":"Seçime uygula","glitch.applyAll":"Tüm metne uygula","glitch.noSelection":"Metin seçilmedi! Metin seçin veya tüm metin düğmesini kullanın.","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"Düzenleyici boş değil. Örnek metinle üzerine yazılsın mı?","confirm.overwriteEmoji":":{name}: emojisi zaten var. Üzerine yazılsın mı?","alert.emojiNameRequired":"Emoji adı girin! Sadece harf, rakam ve alt çizgi.","alert.emojiNameEmpty":"Emoji adını girin!","alert.emojiLinkEmpty":"Emoji bağlantısını girin!","alert.webpOnly":"Sadece .webp dosyaları yüklenebilir!","alert.downloadFailed":`Emoji indirilemedi: {error}

Sunucu CORS ile engelliyor olabilir. Manuel indirip .webp olarak yükleyin.`,"alert.downloadHttp":"İndirme başarısız (HTTP {status})","alert.notImage":"Bağlantı bir görsel dosyasına işaret etmiyor.",sampleText:`# discOwUrd – Örnek Metin
-# Bu alt metin -# subtext biçimini gösterir

## Metin biçimlendirme
**Kalın** · *İtalik* · __Altı çizili__ · ~~Üstü çizili~~ · ||Spoiler – önizlemede tıkla!||
***Kalın italik*** · __**Altı çizili kalın**__ · __*Altı çizili italik*__ · __***Üçü birlikte***__

### Kod ve bağlantılar
Satır içi kod: \`const discord = "biçimlendirici"\`
Tıklanabilir bağlantı: [Discord Markdown rehberi](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`Merhaba, \${name}!\`;
}
\`\`\`

> Tek satır alıntı – kısa vurgular için.

>>> Çok satırlı alıntı ilk satır
her satır aynı blokta kalır
uzun düşünceler için

## Liste örneği
- İlk öğe
- *İtalik* kelimeli ikinci
- **Kalın** vurgulu üçüncü

### Özel emoji
Emoji yüklediyseniz şöyle referans verin: :monkas:
Merhaba, bir bağlantı: [bu metin](https://discord.com)`},it:{"app.title":"OwU","app.subtitle":"Crea testo markdown per Discord","lang.label":"Lingua","panel.editor":"Editor","panel.preview":"Anteprima","btn.sampleText":"Testo di esempio","btn.sampleTextTitle":"Carica testo di esempio","btn.emojis":"Emoji","btn.emojisTitle":"Emoji","btn.copyText":"Copia testo","copy.copied":"Copiato!","editor.placeholder":"Scrivi qui… Seleziona il testo per il menu di formattazione.","preview.empty":"L'anteprima apparirà qui…","modal.emojis":"Emoji","modal.close":"Chiudi","emoji.name":"Nome emoji","emoji.namePlaceholder":"es. monkas","emoji.nameHint":"Appare in Discord come: <code>:nome:</code>","emoji.upload":"Carica emoji WebP","emoji.uploadHint":"Se il nome è vuoto, verrà suggerito il nome del file","emoji.link":"Link emoji","emoji.linkPlaceholder":"https://example.com/emoji.webp","emoji.linkHint":"Con un link, Salva scarica e memorizza l'emoji.","emoji.save":"Salva","emoji.downloading":"Download in corso…","emoji.empty":"Nessuna emoji. Carica un .webp o salva da un link!","emoji.insert":"Inserisci :{name}:","emoji.editLink":"Modifica link","emoji.editLinkPrompt":"URL link emoji:","emoji.delete":"Elimina","emoji.deleteConfirm":"Eliminare l'emoji :{name}:?","format.placeholder":"testo","link.defaultText":"questo testo","format.bold":"Grassetto (**text**)","format.italic":"Corsivo (*text*)","format.underline":"Sottolineato (__text__)","format.boldItalic":"Grassetto corsivo (***text***)","format.underlineBold":"Sottolineato grassetto","format.underlineItalic":"Sottolineato corsivo","format.underlineBoldItalic":"Sottolineato grassetto corsivo","format.strikethrough":"Barrato (~~text~~)","format.spoiler":"Spoiler (||text||)","format.code":"Codice (`text`)","format.codeblock":"Blocco di codice","format.h1":"Intestazione grande (# text)","format.h2":"Intestazione media (## text)","format.h3":"Intestazione piccola (### text)","format.subtext":"Sottotitolo (-# text)","format.quote":"Citazione (> text)","format.multiquote":"Citazione multilinea (>>> text)","format.list":"Lista (- text)","format.link":"Link ([text](url))","format.glitch":"Testo glitch / zalgo","btn.glitch":"Glitch","btn.glitchTitle":"Generatore testo glitch / zalgo","modal.glitch":"Testo glitch","glitch.description":"Aggiunge segni Unicode combinati – effetto zalgo per Discord.","glitch.intensity":"Intensità","glitch.level.mini":"Leggero","glitch.level.normal":"Medio","glitch.level.max":"Forte","glitch.level.chaos":"Caotico","glitch.preview":"Anteprima","glitch.previewInput":"Testo di esempio","glitch.previewPlaceholder":"Scrivi il testo di prova…","glitch.regenerate":"Rigenera","glitch.applySelection":"Applica alla selezione","glitch.applyAll":"Applica a tutto il testo","glitch.noSelection":"Nessun testo selezionato! Seleziona testo o usa tutto il testo.","glitch.samplePreview":"Glitch Text","confirm.overwriteSample":"L'editor non è vuoto. Sovrascrivere con il testo di esempio?","confirm.overwriteEmoji":"L'emoji :{name}: esiste già. Sovrascrivere?","alert.emojiNameRequired":"Inserisci un nome emoji! Solo lettere, numeri e underscore.","alert.emojiNameEmpty":"Inserisci il nome emoji!","alert.emojiLinkEmpty":"Inserisci il link emoji!","alert.webpOnly":"Si possono caricare solo file .webp!","alert.downloadFailed":`Impossibile scaricare emoji: {error}

Il server potrebbe bloccare via CORS. Scarica manualmente e carica come .webp.`,"alert.downloadHttp":"Download fallito (HTTP {status})","alert.notImage":"Il link non punta a un file immagine.",sampleText:`# discOwUrd – Testo di esempio
-# Questo sottotitolo mostra il formato -# subtext

## Formattazione testo
**Grassetto** · *Corsivo* · __Sottolineato__ · ~~Barrato~~ · ||Spoiler – clicca in anteprima!||
***Grassetto corsivo*** · __**Sottolineato grassetto**__ · __*Sottolineato corsivo*__ · __***Tutti e tre***__

### Codice e link
Codice inline: \`const discord = "formattatore"\`
Link cliccabile: [Guida Markdown Discord](https://support.discord.com/hc/en-us/articles/210298617)

\`\`\`
function greet(name) {
  return \`Ciao, \${name}!\`;
}
\`\`\`

> Citazione singola – ideale per brevi evidenziazioni.

>>> Prima riga citazione multilinea
ogni riga resta nello stesso blocco
per testi più lunghi

## Esempio lista
- Primo elemento
- Secondo con parola in *corsivo*
- Terzo con enfasi in **grassetto**

### Emoji personalizzata
Se hai caricato un'emoji, riferisciti così: :monkas:
Ciao, ecco un link: [questo testo](https://discord.com)`}};function ve(){const e=localStorage.getItem(me);if(e&&S[e])return e;const t=(navigator.language||"en").split("-")[0].toLowerCase();return S[t]?t:"hu"}let D=ve();function m(e,t={}){var i;return(((i=S[D])==null?void 0:i[e])??S.en[e]??e).replace(/\{(\w+)\}/g,(l,n)=>t[n]!==void 0?t[n]:`{${n}}`)}function we(){return m("sampleText")}function $(e){return m(`format.${e}`)}function de(){document.documentElement.lang=D,document.title=m("app.title"),document.querySelectorAll("[data-i18n]").forEach(e=>{const t=e.dataset.i18n,o=e.querySelector("[data-i18n-text]");o?o.textContent=m(t):e.textContent=m(t)}),document.querySelectorAll("[data-i18n-html]").forEach(e=>{e.innerHTML=m(e.dataset.i18nHtml)}),document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{e.placeholder=m(e.dataset.i18nPlaceholder)}),document.querySelectorAll("[data-i18n-title]").forEach(e=>{e.title=m(e.dataset.i18nTitle)}),document.querySelectorAll("[data-i18n-aria]").forEach(e=>{e.setAttribute("aria-label",m(e.dataset.i18nAria))})}function ye(e,t){S[e]&&(D=e,localStorage.setItem(me,e),de(),t&&t())}function Ee(e,t){const o=document.createElement("div");o.className="lang-selector";const i=document.createElement("label");i.className="lang-label",i.htmlFor="lang-select",i.dataset.i18n="lang.label";const l=document.createElement("select");l.id="lang-select",l.className="lang-select",xe.forEach(({code:n,label:a})=>{const r=document.createElement("option");r.value=n,r.textContent=a,n===D&&(r.selected=!0),l.appendChild(r)}),l.addEventListener("change",()=>{ye(l.value,t)}),o.appendChild(i),o.appendChild(l),e.appendChild(o),i.textContent=m("lang.label")}const X=["#bd58f2","#d48aff","#ffffff","#a347d9","#3ba55d","#f0f0f5"];function _e(e,t){const o=document.createElement("canvas");o.className="confetti-canvas",o.width=window.innerWidth,o.height=window.innerHeight,document.body.appendChild(o);const i=o.getContext("2d"),l=[];for(let r=0;r<140;r++){const c=Math.random()*Math.PI*2,g=3+Math.random()*10;l.push({x:e,y:t,vx:Math.cos(c)*g,vy:Math.sin(c)*g-(4+Math.random()*4),w:4+Math.random()*5,h:5+Math.random()*7,rot:Math.random()*Math.PI*2,rotV:(Math.random()-.5)*.35,color:X[Math.floor(Math.random()*X.length)],life:.9+Math.random()*.1})}let n;function a(){i.clearRect(0,0,o.width,o.height);let r=!1;for(const c of l)c.x+=c.vx,c.y+=c.vy,c.vy+=.22,c.vx*=.985,c.life-=.014,!(c.life<=0)&&(r=!0,i.save(),i.translate(c.x,c.y),i.rotate(c.rot),c.rot+=c.rotV,i.globalAlpha=Math.min(1,c.life),i.fillStyle=c.color,i.fillRect(-c.w/2,-c.h/2,c.w,c.h),i.restore());r?n=requestAnimationFrame(a):o.remove()}n=requestAnimationFrame(a),setTimeout(()=>{cancelAnimationFrame(n),o.remove()},4e3)}const ze=["̍","̎","̄","̅","̿","̑","̆","̐","͒","͗","͑","̇","̈","̃","̂","̌","͛","͌","͋","̕","̡","̢","̧","̨","̴","̵","̶","͏","͜"],Te=["̖","̗","̘","̙","̜","̝","̞","̟","̠","̤","̥","̦","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̹","̺","̻","̼","ͅ"],Le=["̚","̛","̀","́","͘","̡","̢","̧","̨","̴","̵","̶","͌","͍","͜","͝","͞","͟","͠","͢"],Se=["mini","normal","max","chaos"],ee={mini:{up:[0,1],mid:[0,0],down:[0,1]},normal:{up:[1,3],mid:[0,1],down:[1,3]},max:{up:[3,7],mid:[1,2],down:[3,7]},chaos:{up:[6,14],mid:[2,5],down:[6,14]}};function U(e){return e[Math.floor(Math.random()*e.length)]}function q(e,t){return Math.floor(Math.random()*(t-e+1))+e}function Pe(e){const t=e.codePointAt(0);return!(e===`
`||e==="\r"||e==="	"||t>=768&&t<=879||t>=6832&&t<=6911||t>=7616&&t<=7679||t>=8400&&t<=8447||t>=65056&&t<=65071)}function F(e,t="normal"){const o=ee[t]||ee.normal;return[...e].map(i=>{if(!Pe(i))return i;let l=i;const[n,a]=o.up,[r,c]=o.mid,[g,p]=o.down;for(let d=0;d<q(n,a);d+=1)l+=U(ze);for(let d=0;d<q(r,c);d+=1)l+=U(Le);for(let d=0;d<q(g,p);d+=1)l+=U(Te);return l}).join("")}function W(e){return e.trim()===""?!1:e.startsWith(">>> ")?!0:!(e.startsWith("> ")||/^#{1,3} /.test(e)||e.startsWith("-# ")||/^[-*] /.test(e))}function Ce(e){const t=e.split(`
`),o=[];let i=0;for(;i<t.length;){if(t[i].startsWith(">>> ")){for(o.push(t[i]),i+=1;i<t.length&&W(t[i]);)o.push(t[i].replace(/^>>>\s?/,"")),i+=1;i<t.length&&t[i].trim()!==""&&o.push("");continue}o.push(t[i]),i+=1}return o.join(`
`)}function Ie(e){const t=e.split(`
`),o=[];let i=0;for(;i<t.length;){if(t[i].startsWith(">>> ")){const l=[t[i].slice(4)];for(i+=1;i<t.length&&W(t[i]);)l.push(t[i].replace(/^>>>\s?/,"")),i+=1;l.forEach(n=>o.push(`> ${n}`));continue}o.push(t[i]),i+=1}return o.join(`
`)}function Me(e,{lineQuotes:t=!1}={}){const o=t?Ie(e):e;return Ce(o)}const K=[{id:"bold",label:"B",prefix:"**",suffix:"**",group:"inline"},{id:"italic",label:"I",prefix:"*",suffix:"*",group:"inline"},{id:"underline",label:"U",prefix:"__",suffix:"__",group:"inline"},{id:"boldItalic",label:"BI",prefix:"***",suffix:"***",group:"inline"},{id:"underlineBold",label:"UB",prefix:"__**",suffix:"**__",group:"inline"},{id:"underlineItalic",label:"UI",prefix:"__*",suffix:"*__",group:"inline"},{id:"underlineBoldItalic",label:"UBI",prefix:"__***",suffix:"***__",group:"inline"},{id:"strikethrough",label:"S",prefix:"~~",suffix:"~~",group:"inline"},{id:"spoiler",label:"||",prefix:"||",suffix:"||",group:"inline"},{id:"code",label:"</>",prefix:"`",suffix:"`",group:"code"},{id:"codeblock",label:"```",prefix:"```\n",suffix:"\n```",group:"code"},{id:"h1",label:"H1",linePrefix:"# ",group:"block"},{id:"h2",label:"H2",linePrefix:"## ",group:"block"},{id:"h3",label:"H3",linePrefix:"### ",group:"block"},{id:"subtext",label:"-#",linePrefix:"-# ",group:"block"},{id:"quote",label:">",linePrefix:"> ",group:"block"},{id:"multiquote",label:">>>",linePrefix:">>> ",group:"block"},{id:"list",label:"•",linePrefix:"- ",group:"block"},{id:"link",label:"🔗",custom:!0,group:"block"}],Be="discord-formater",De=1,k="emojis",s=document.getElementById("editor"),T=document.getElementById("toolbar"),f=document.getElementById("selection-popup"),te=document.getElementById("preview"),ue=document.getElementById("copy-btn"),z=document.getElementById("copy-feedback"),He=document.getElementById("sample-text-btn"),Z=document.getElementById("emoji-modal"),Ae=document.getElementById("emoji-picker-btn"),ie=document.getElementById("emoji-grid"),Ne=document.getElementById("emoji-empty"),Ue=document.getElementById("emoji-upload"),v=document.getElementById("upload-zone"),y=document.getElementById("emoji-name"),P=document.getElementById("emoji-link"),w=document.getElementById("emoji-link-save"),qe=document.getElementById("lang-selector-wrap"),Oe=document.getElementById("glitch-btn"),V=document.getElementById("glitch-modal"),oe=document.getElementById("glitch-levels"),L=document.getElementById("glitch-preview-input"),Ge=document.getElementById("glitch-preview-output"),Re=document.getElementById("glitch-regenerate"),$e=document.getElementById("glitch-apply-selection"),Fe=document.getElementById("glitch-apply-all"),pe="discord-formater-glitch-level",O=["Copied!","Double copy!","Triple copy!","Dude stop!","COPIED","COPIEEEEED","MEGA COPY"];let G=0,le=null,ne=null,u=[],b=new Map,C=localStorage.getItem(pe)||"normal";function Q(){return new Promise((e,t)=>{const o=indexedDB.open(Be,De);o.onupgradeneeded=i=>{const l=i.target.result;l.objectStoreNames.contains(k)||l.createObjectStore(k,{keyPath:"name"})},o.onsuccess=()=>e(o.result),o.onerror=()=>t(o.error)})}async function We(){const e=await Q();return new Promise((t,o)=>{const n=e.transaction(k,"readonly").objectStore(k).getAll();n.onsuccess=()=>t(n.result||[]),n.onerror=()=>o(n.error)})}async function he(e,t,o=""){const i=await Q();return new Promise((l,n)=>{const c=i.transaction(k,"readwrite").objectStore(k).put({name:e,blob:t,link:o.trim(),createdAt:Date.now()});c.onsuccess=()=>l(),c.onerror=()=>n(c.error)})}async function Ke(e){const t=await Q();return new Promise((o,i)=>{const a=t.transaction(k,"readwrite").objectStore(k).delete(e);a.onsuccess=()=>o(),a.onerror=()=>i(a.error)})}function Ze(e,t){if(b.has(e))return b.get(e);const o=URL.createObjectURL(t);return b.set(e,o),o}function ge(e){return e.link?e.link:Ze(e.name,e.blob)}function fe(e,t=!1){const o=document.createElement("button");return o.type="button",o.className="btn-format",o.title=$(e.id),o.dataset.formatId=e.id,o.innerHTML=e.label,!t&&e.label.length<=3&&(o.innerHTML=`<span>${e.label}</span>`),o.addEventListener("click",i=>{i.preventDefault(),M(e.id),E()}),o}function be(){T.innerHTML="",f.innerHTML="",Qe(),Je()}function Ve(){be(),H(),w.textContent=m("emoji.save"),_(),h(),I()}function Qe(){const e=["inline","code","block"];e.forEach((l,n)=>{const a=document.createElement("div");if(a.className="toolbar-group",K.filter(r=>r.group===l).forEach(r=>{a.appendChild(fe(r))}),T.appendChild(a),n<e.length-1){const r=document.createElement("div");r.className="toolbar-divider",T.appendChild(r)}});const t=document.createElement("div");t.className="toolbar-divider",T.appendChild(t);const o=document.createElement("div");o.className="toolbar-group";const i=document.createElement("button");i.type="button",i.className="btn-format",i.title=$("glitch"),i.innerHTML="⚡",i.addEventListener("click",()=>Y()),o.appendChild(i),T.appendChild(o)}function Ye(){const e=document.createElement("button");return e.type="button",e.className="btn-format",e.title=$("glitch"),e.innerHTML="⚡",e.addEventListener("click",t=>{t.preventDefault(),Y(!0),E()}),e}function Je(){K.filter(t=>t.group==="inline"||t.group==="code").forEach(t=>{f.appendChild(fe(t,!0))}),f.appendChild(Ye())}function x(){return{start:s.selectionStart,end:s.selectionEnd,text:s.value.substring(s.selectionStart,s.selectionEnd)}}function j(e,t){s.focus(),s.setSelectionRange(e,t)}function M(e){const t=K.find(N=>N.id===e);if(!t)return;if(t.custom&&e==="link"){it();return}const{start:o,end:i,text:l}=x(),n=s.value;if(t.linePrefix!==void 0){Xe(t.linePrefix,o,i),h();return}const a=m("format.placeholder"),r=n.substring(0,o),c=n.substring(i),g=t.prefix+(l||a)+t.suffix;s.value=r+g+c;const p=o+t.prefix.length,d=p+(l||a).length;j(p,d),h()}function Xe(e,t,o){const i=s.value,l=i.lastIndexOf(`
`,t-1)+1,n=i.indexOf(`
`,o),a=n===-1?i.length:n,g=i.substring(l,a).split(`
`).map((d,N)=>{if(e===">>> "){const J=d.replace(/^>>>\s?/,"").replace(/^>\s/,"");return N===0?`>>> ${J}`:J}return d.startsWith(e)?d:e+d}).join(`
`);let p=i.substring(a);e===">>> "&&p.length>0&&p.startsWith(`
`)&&!p.startsWith(`

`)&&p.trim()&&(p=`
${p}`),s.value=i.substring(0,l)+g+p,j(l,l+g.length)}function et(e){return W(e)}function tt(e){const t=e.split(`
`),o=[],i=[];let l=0,n=0;for(;n<t.length;){const a=t[n];if(a.startsWith(">>> ")){const r=[a.slice(4)];for(n+=1;n<t.length&&et(t[n]);)r.push(t[n].replace(/^>>>\s?/,"")),n+=1;const c=`BQ${l++}`;i.push({marker:c,html:`<blockquote>${r.map(B).join("<br>")}</blockquote>`}),o.push(c);continue}if(a.startsWith("> ")){const r=`BQ${l++}`;i.push({marker:r,html:`<blockquote>${B(a.slice(2))}</blockquote>`}),o.push(r),n+=1;continue}o.push(a),n+=1}return{text:o.join(`
`),markers:i}}function it(){const{start:e,end:t,text:o}=x(),i=o||m("link.defaultText"),l="LINK",n=`[${i}](${l})`,a=s.value;s.value=a.substring(0,e)+n+a.substring(t);const r=e+`[${i}](`.length,c=r+l.length;j(r,c),h()}function ot(e){const{start:t,end:o}=x(),i=s.value;s.value=i.substring(0,t)+e+i.substring(o);const l=t+e.length;j(l,l),h()}function ae(){const{start:e,end:t}=x();if(e===t){E();return}const o=lt(s,t),i=s.parentElement.getBoundingClientRect();f.style.left=`${Math.min(o.left,i.width-f.offsetWidth-8)}px`,f.style.top=`${Math.max(o.top-44,8)}px`,f.classList.remove("hidden")}function E(){f.classList.add("hidden")}function lt(e,t){const o=document.createElement("div"),i=getComputedStyle(e),l=["fontFamily","fontSize","fontWeight","lineHeight","letterSpacing","paddingTop","paddingRight","paddingBottom","paddingLeft","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","boxSizing","whiteSpace","wordWrap","overflowWrap"];o.style.position="absolute",o.style.visibility="hidden",o.style.whiteSpace="pre-wrap",o.style.wordWrap="break-word",o.style.width=`${e.clientWidth}px`,l.forEach(d=>{o.style[d]=i[d]});const n=e.value.substring(0,t);o.textContent=n;const a=document.createElement("span");a.textContent=e.value.substring(t)||".",o.appendChild(a),document.body.appendChild(o);const r=a.getBoundingClientRect(),c=o.getBoundingClientRect();e.getBoundingClientRect();const g=r.left-c.left,p=r.top-c.top-e.scrollTop;return document.body.removeChild(o),{left:g+12,top:p+12}}function B(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function nt(e){const{text:t,markers:o}=tt(e);let i=B(t);return o.forEach(({marker:n,html:a})=>{i=i.split(n).join(a)}),u.map(n=>n.name).forEach(n=>{const a=u.find(g=>g.name===n),r=B(ge(a)),c=new RegExp(`:${rt(n)}:`,"g");i=i.replace(c,`<img class="custom-emoji" src="${r}" alt=":${n}:" title=":${n}:" />`)}),i=i.replace(/```([\s\S]*?)```/g,(n,a)=>`<pre><code>${a}</code></pre>`),i=i.replace(/`([^`\n]+)`/g,"<code>$1</code>"),i=i.replace(/\|\|(.+?)\|\|/g,`<span class="spoiler" onclick="this.classList.toggle('revealed')">$1</span>`),i=i.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>'),i=i.replace(/^### (.+)$/gm,"<h3>$1</h3>"),i=i.replace(/^## (.+)$/gm,"<h2>$1</h2>"),i=i.replace(/^# (.+)$/gm,"<h1>$1</h1>"),i=i.replace(/^-# (.+)$/gm,'<p class="subtext">$1</p>'),i=i.replace(/^[-*] (.+)$/gm,"<ul><li>$1</li></ul>"),i=i.replace(/<\/ul>\s*<ul>/g,""),i=at(i),i=i.replace(/\n/g,"<br>"),i}function at(e){const t=[];let o=0;return e=e.replace(/<[^>]+>[\s\S]*?<\/[^>]+>|<[^>]+\/>/g,i=>{const l=`\0PH${o++}\0`;return t.push({key:l,match:i}),l}),e=e.replace(/__\*\*\*(.+?)\*\*\*__/g,"<u><strong><em>$1</em></strong></u>"),e=e.replace(/__\*\*(.+?)\*\*__/g,"<u><strong>$1</strong></u>"),e=e.replace(/__\*(.+?)\*__/g,"<u><em>$1</em></u>"),e=e.replace(/__([^_\n]+?)__/g,"<u>$1</u>"),e=e.replace(/\*\*\*(.+?)\*\*\*/g,"<strong><em>$1</em></strong>"),e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(new RegExp("(?<!\\*)\\*([^*\\n]+?)\\*(?!\\*)","g"),"<em>$1</em>"),e=e.replace(/~~(.+?)~~/g,"<del>$1</del>"),t.forEach(({key:i,match:l})=>{e=e.replace(i,l)}),e}function rt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function h(){if(!s.value.trim()){te.innerHTML=`<span class="preview-placeholder">${m("preview.empty")}</span>`;return}te.innerHTML=nt(s.value)}async function ct(){const e=Me(s.value,{lineQuotes:!0});try{await navigator.clipboard.writeText(e),re()}catch{const{start:t,end:o}=x(),i=s.value;s.value=e,s.select(),document.execCommand("copy"),s.value=i,j(t,o),re()}}function re(){const e=G%O.length,t=e===O.length-1;if(z.textContent=O[e],z.classList.toggle("copy-feedback-mega",t),z.classList.remove("hidden"),t){const o=ue.getBoundingClientRect();_e(o.left+o.width/2,o.top+o.height/2)}G++,clearTimeout(ne),ne=setTimeout(()=>{G=0},8e3),clearTimeout(le),le=setTimeout(()=>{z.classList.add("hidden"),z.classList.remove("copy-feedback-mega")},2e3)}function st(){Z.classList.remove("hidden"),_()}function R(){Z.classList.add("hidden")}function _(){ie.innerHTML="",Ne.classList.toggle("hidden",u.length>0),u.forEach(e=>{const t=document.createElement("div");t.className="emoji-item-wrap";const o=document.createElement("button");o.type="button",o.className="emoji-item",o.title=m("emoji.insert",{name:e.name});const i=document.createElement("img");i.src=ge(e),i.alt=e.name;const l=document.createElement("span");if(l.textContent=`:${e.name}:`,o.appendChild(i),o.appendChild(l),e.link){const r=document.createElement("span");r.className="emoji-link-badge",r.title=e.link,r.textContent="🔗",o.appendChild(r)}o.addEventListener("click",()=>{ot(`:${e.name}:`),R()});const n=document.createElement("button");n.type="button",n.className="edit-emoji-link",n.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',n.title=m("emoji.editLink"),n.addEventListener("click",async r=>{r.stopPropagation();const c=prompt(m("emoji.editLinkPrompt"),e.link||"https://");c!==null&&(e.link=c.trim(),await he(e.name,e.blob,e.link),_(),h())});const a=document.createElement("button");a.type="button",a.className="delete-emoji",a.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',a.title=m("emoji.delete"),a.addEventListener("click",async r=>{r.stopPropagation(),confirm(m("emoji.deleteConfirm",{name:e.name}))&&(await Ke(e.name),b.has(e.name)&&(URL.revokeObjectURL(b.get(e.name)),b.delete(e.name)),u=u.filter(c=>c.name!==e.name),_(),h())}),t.appendChild(o),t.appendChild(n),t.appendChild(a),ie.appendChild(t)})}function mt(e){return e.replace(/\.webp$/i,"").toLowerCase().replace(/[^a-z0-9_]/g,"")}function dt(e){return e.trim().toLowerCase().replace(/[^a-z0-9_]/g,"")}function ke(e=""){const t=y.value.trim();return dt(t||e)}function ut(){y.value="",P.value=""}async function je(e,t,o=""){if(!e)return alert(m("alert.emojiNameRequired")),y.focus(),!1;if(u.some(a=>a.name===e)){if(!confirm(m("confirm.overwriteEmoji",{name:e})))return!1;b.has(e)&&(URL.revokeObjectURL(b.get(e)),b.delete(e))}const i=o.trim();await he(e,t,i);const l={name:e,blob:t,link:i},n=u.findIndex(a=>a.name===e);return n>=0?u[n]=l:u.push(l),u.sort((a,r)=>a.name.localeCompare(r.name)),ut(),!0}async function ce(e){if(!e||!e.name.toLowerCase().endsWith(".webp")){alert(m("alert.webpOnly"));return}const t=mt(e.name);!y.value.trim()&&t&&(y.value=t);const o=ke(t),i=P.value.trim();await je(o,e,i)&&(_(),h())}async function se(){const e=ke(),t=P.value.trim();if(!e){alert(m("alert.emojiNameEmpty")),y.focus();return}if(!t){alert(m("alert.emojiLinkEmpty")),P.focus();return}w.disabled=!0,w.textContent=m("emoji.downloading");try{const o=await fetch(t);if(!o.ok)throw new Error(m("alert.downloadHttp",{status:o.status}));const i=await o.blob();if(!i.type.startsWith("image/"))throw new Error(m("alert.notImage"));await je(e,i,t)&&(_(),h())}catch(o){alert(m("alert.downloadFailed",{error:o.message}))}finally{w.disabled=!1,w.textContent=m("emoji.save")}}function pt(){s.value.trim()&&!confirm(m("confirm.overwriteSample"))||(s.value=we(),j(s.value.length,s.value.length),h(),E())}function H(){oe.innerHTML="",Se.forEach(e=>{const t=document.createElement("button");t.type="button",t.className=`glitch-level-btn${e===C?" active":""}`,t.dataset.level=e,t.textContent=m(`glitch.level.${e}`),t.addEventListener("click",()=>{C=e,localStorage.setItem(pe,e),H(),I()}),oe.appendChild(t)})}function ht(){return L.value.trim()||m("glitch.samplePreview")}function I(){const e=ht();Ge.textContent=F(e,C)}function Y(e=!1){const{text:t}=x();e&&t?L.value=t:L.value.trim()||(L.value=t||m("glitch.samplePreview")),H(),I(),V.classList.remove("hidden")}function A(){V.classList.add("hidden")}function gt(e,t,o){const i=s.value,l=F(o,C);s.value=i.substring(0,e)+l+i.substring(t),j(e,e+l.length),h()}function ft(){const{start:e,end:t,text:o}=x();if(!o){alert(m("glitch.noSelection"));return}gt(e,t,o),A()}function bt(){s.value&&(s.value=F(s.value,C),j(s.value.length,s.value.length),h(),A())}function kt(){Oe.addEventListener("click",()=>Y()),Re.addEventListener("click",I),L.addEventListener("input",I),$e.addEventListener("click",ft),Fe.addEventListener("click",bt),V.querySelectorAll("[data-glitch-close]").forEach(e=>{e.addEventListener("click",A)})}function jt(){s.addEventListener("input",h),s.addEventListener("keyup",()=>{requestAnimationFrame(ae)}),s.addEventListener("mouseup",()=>{requestAnimationFrame(ae)}),s.addEventListener("blur",()=>{setTimeout(E,150)}),document.addEventListener("mousedown",e=>{!f.contains(e.target)&&e.target!==s&&E()}),ue.addEventListener("click",ct),He.addEventListener("click",pt),Ae.addEventListener("click",st),Z.querySelectorAll("[data-close]").forEach(e=>{e.addEventListener("click",R)}),Ue.addEventListener("change",e=>{const t=e.target.files[0];t&&ce(t),e.target.value=""}),w.addEventListener("click",se),P.addEventListener("keydown",e=>{e.key==="Enter"&&se()}),v.addEventListener("dragover",e=>{e.preventDefault(),v.classList.add("dragover")}),v.addEventListener("dragleave",()=>{v.classList.remove("dragover")}),v.addEventListener("drop",e=>{e.preventDefault(),v.classList.remove("dragover");const t=e.dataTransfer.files[0];t&&ce(t)}),document.addEventListener("keydown",e=>{e.key==="Escape"&&(R(),A()),e.ctrlKey&&e.key==="b"&&(e.preventDefault(),M("bold")),e.ctrlKey&&e.key==="i"&&(e.preventDefault(),M("italic")),e.ctrlKey&&e.key==="u"&&(e.preventDefault(),M("underline"))})}async function xt(){de(),Ee(qe,Ve),be(),jt(),kt(),H(),u=await We(),u=u.map(e=>({...e,link:e.link||""})),u.sort((e,t)=>e.name.localeCompare(t.name)),h()}xt();
