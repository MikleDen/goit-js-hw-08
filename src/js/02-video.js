import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const CURRENT_TIME_PLAYER = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
    localStorage.setItem(CURRENT_TIME_PLAYER, JSON.stringify(data.seconds));
};

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_PLAYER)) || 0);




