# portfolio-layout-project
конспект как сделать портфолио

1) создать новый проект
- создаю папку на своем гитхабе https://github.com/PokatskayaKseniya?tab=repositories нажать New
- через VScode вхожу на моем компьютере туда где хранятся мои проекты programming\github
- в терминале находясь в папке github написать git clone ссылка на гитхаб с новой папкой например https://github.com/PokatskayaKseniya/portfolio-layout-project

2) чтобы появилась папка node_modules (все нпм-пакеты) и package-lock.json надо: 
- со старого проекта скопировать package.json (в нем список npm пакетов из node.js(платформы для использования джаваскрипта на стороне сервера) например: у меня установлена node js 13.14.0 и нпм-пакеты: browser-sync (этот инструмент позволяет отслеживать изменения в исходных файлах и скриптах без перезагрузки страницы)  ) & gulpfile.js 
через терминал bash:
$npm i (установить нпм-пакеты)
$gulp (запустить сервер)
$ctrl C (остановить сервер)
$clean (очистить терминал)
$npm update --save (обновить локально версии нпм-пакетов в проекте, save-помогает изменить в package.json новый номер версий)
в результате node_modules и package-lock.json создаются автоматически, в ручную создавать не надо!

3) настроить гитигнор
создать файл .gitignore и написать в него:
node_modules
package-lock.json
