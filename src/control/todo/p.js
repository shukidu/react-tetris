import event from '../../unit/event';
import states from '../states';
import actions from '../../actions';

const down = (store) => {
    store.dispatch(actions.keyboard.pause(true));
    event.down({
        key: 'p',
        once: true,
        useCallback: () => {
            const state = store.getState();
            if(state.get('lock')){
                return;
            }
            const cur = state.get('cur');
            const isPause = state.get('pause');
            if(cur !== null){ //pause
                states.pause(!isPause);
            } else{ // new start
                states.start();
            }
        },
    });
};

const up = (store) =>{
    store.dispatch(actions.keyboard.pause(false));
    event.up({
        key: 'p',
    });
};

export default {
    down,
    up,
};