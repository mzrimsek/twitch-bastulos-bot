import { getEnvValue } from 'src/utils';

export default {
  address: getEnvValue('MQTT_BROKER_ADDRESS')
};
