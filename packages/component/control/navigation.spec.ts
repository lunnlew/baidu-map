import { shallowMount } from '@vue/test-utils'
import navigation from './navigation.vue'
import { addNavigationControl } from '../../lib/control'

const control = {}
jest.mock('../../lib/control', () => ({
    addNavigationControl: jest.fn(() => control)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(navigation, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        anchor: 0,
        offset: [50, 80],
        show: true,
        type: 1,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addNavigationControl).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].bmobj).toEqual(control)
})