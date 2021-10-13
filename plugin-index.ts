import {DollarSign} from "xpresser/types";

const packageName = '@xpresser/bcrypt';

export function run(plugin: any, $: DollarSign) {
    $.ifNotConsole(() => {
        if (!$.config.has(packageName)) {
            return $.logErrorAndExit(`Config "bcrypt" is required!`)
        }

        const config = $.config.path(packageName);


        if (!config.has('salt')) {
            return $.logErrorAndExit(`saltRounds is required in config: "${packageName}"`)
        }

        require('./index')
    });
}