import { shallowMount } from '@vue/test-utils'
import walkingroute from './walking-route.vue'
import { addWalkingRoute } from '../../lib/tool'

const tool = {
    search: jest.fn(),
}

jest.mock('../../lib/tool', () => ({
    addWalkingRoute: jest.fn(() => tool)
}))

test('test Map', async () => {
    let onReady = () => { }
    let onSearchComplete = () => { }
    let onMarkersSet = () => { }
    let onInfoHtmlSet = () => { }
    let onPolylinesSet = () => { }
    let onResultsHtmlSet = () => { }
    const wrapper = shallowMount(walkingroute, {
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
            onResultsHtmlSet: onResultsHtmlSet,
            onReady: onReady
        }
    })
    expect(wrapper.props()).toEqual({
        map: null,
        location: undefined,
        start: undefined,
        end: undefined,
        renderOptions: undefined,
        onSearchComplete: onSearchComplete,
        onMarkersSet: onMarkersSet,
        onInfoHtmlSet: onInfoHtmlSet,
        onPolylinesSet: onPolylinesSet,
        onResultsHtmlSet: onResultsHtmlSet,
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(addWalkingRoute).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any[]
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].search).toBeDefined()
    expect(readyEvent[0][0]).toHaveProperty('bmobj', tool)

})