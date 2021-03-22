import { SocialNetworkUI, stateCreator } from '../../social-network'
import { instagramShared } from './shared'
import { instagramBase } from './base'
import { IdentityProviderInstagram } from './collecting/identity-provider'
import { createTaskStartSetupGuideDefault } from '../../social-network/defaults'
const origins = ['https://www.instagram.com/*', 'https://m.instagram.com/*', 'https://instagram.com/*']
const define: SocialNetworkUI.Definition = {
    ...instagramShared,
    ...instagramBase,
    automation: {},
    collecting: {
        identityProvider: IdentityProviderInstagram,
    },
    configuration: {
        setupWizard: {
            disableSayHello: true,
        },
    },
    customization: {},
    init(signal) {
        const friends = stateCreator.friends()
        const profiles = stateCreator.profiles()
        // No need to init cause this network is not going to support those features now.
        return { friends, profiles }
    },
    injection: {
        setupWizard: createTaskStartSetupGuideDefault(instagramBase.networkIdentifier),
    },
    permission: {
        request: () => browser.permissions.request({ origins }),
        has: () => browser.permissions.contains({ origins }),
    },
}
export default define
