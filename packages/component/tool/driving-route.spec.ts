import { shallowMount } from '@vue/test-utils'
import drivingroute from './driving-route.vue'
import { addDrivingRoute } from '../../lib/tool'

const tool = {
    search: jest.fn(),
}

jest.mock('../../lib/tool', () => ({
    addDrivingRoute: jest.fn(() => tool)
}))

test('test Map', async () => {
    let onReady = () => { }
    let onSearchComplete = () => { }
    let onMarkersSet = () => { }
    let onInfoHtmlSet = () => { }
    let onPolylinesSet = () => { }
    const wrapper = shallowMount(drivingroute, {
        global: {
            provide: {
                map: {
                    value: {}
                }
            }
        },
        slots: {},
        props: {
            onSearchComplete: onSearchComplete,
            onMarkersSet: onMarkersSet,
            onInfoHtmlSet: onInfoHtmlSet,
            onPolylinesSet: onPolylinesSet,
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        location: undefined,
        start: undefined,
        end: undefined,
        renderOptions: undefined,
        policy: 0,
        onSearchComplete: onSearchComplete,
        onMarkersSet: onMarkersSet,
        onInfoHtmlSet: onInfoHtmlSet,
        onPolylinesSet: onPolylinesSet,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addDrivingRoute).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any[]
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].search).toBeDefined()
    expect(readyEvent[0][0]).toHaveProperty('bmobj', tool)

})