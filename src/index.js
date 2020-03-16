// NOTE без App рушится верстка
import App from './App';
import 'core-js/features/map';
import 'core-js/features/set';
import connect from '@vkontakte/vk-connect';
import start from './utils/start';
import handleEvent from './utils/handleEvent';
import InformationPanel from './panels/InformationPanel';
import render from './utils/render';
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send("VKWebAppInit", {});

// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();

start();
// render(InformationPanel);
connect.subscribe((e) => handleEvent(e));