import RNAmplitude from 'react-native-amplitude-analytics';
import {AMPLITUDE_API_KEY} from '../data';

const amplitude = new RNAmplitude(AMPLITUDE_API_KEY);

export const LOG_EVENT = eventName => {
  amplitude.logEvent(eventName);
};

export const SET_USER_ID = user_id => {
  amplitude.setUserId(user_id);
};
