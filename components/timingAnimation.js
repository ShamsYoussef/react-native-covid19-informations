
import Animated, { Easing } from 'react-native-reanimated';
const { Value,
    block,
    cond,
    set,
    Clock,
    stopClock,
    startClock,
    clockRunning,
    timing,
    debug,
    Extrapolate,
    interpolate
} = Animated;

export const transform = (f, t, opacity) => {
    return interpolate(opacity, {
        inputRange: [0, 1],
        outputRange: [f, t],
        extrapolate: Extrapolate.CLAMP
    })
}


const setTiming = (clock, value, distance) => {
    const state = {
        finished: new Value(0),
        position: new Value(0),
        time: new Value(0),
        frameTime: new Value(0),
    };

    const config = {
        duration: 500,
        toValue: new Value(0),
        easing: Easing.inOut(Easing.ease),
    };

    return block([
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.time, 0),
            set(state.position, value),
            set(state.frameTime, 0),
            set(config.toValue, distance),
            startClock(clock),
        ]),

        timing(clock, state, config),
        cond(state.finished, debug('stop clock', stopClock(clock))),
        state.position,

    ]);
}


export default setTiming;