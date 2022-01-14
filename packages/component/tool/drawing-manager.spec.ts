import { shallowMount } from '@vue/test-utils'
import drawingmanager from './drawing-manager.vue'
import { addDrawingManager, initDrawingManager } from '../../lib/tool'
import { nextTick } from 'vue'

const tool = {}

jest.mock('../../lib/tool', () => ({
    initDrawingManager: jest.fn(() => Promise.resolve({ BMapGLLib: undefined })),
    addDrawingManager: jest.fn(() => tool)
}))

test('test Map', async () => {
    let onReady = () => { }
    const wrapper = shallowMount(drawingmanager, {
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
        isOpen: false,
        drawingType: 'marker',
        enableCalculate: false,
        enableSorption: true,
        enableGpc: false,
        enableLimit: false,
        limitOptions: {
            area: 50000000,
            distance: 30000,
        },
        sorptiondistance: 20,
        circleOptions: {
            strokeColor: '#5E87DB',
            fillColor: '#5E87DB',
            strokeWeight: 2,
            strokeOpacity: 1,
            fillOpacity: 0.2,
        },
        polylineOptions: {
            strokeColor: '#5E87DB',
            fillColor: '#5E87DB',
            strokeWeight: 2,
            strokeOpacity: 1,
            fillOpacity: 0.2,
        },
        polygonOptions: {
            strokeColor: '#5E87DB',
            fillColor: '#5E87DB',
            strokeWeight: 2,
            strokeOpacity: 1,
            fillOpacity: 0.2,
        },
        rectangleOptions: {
            strokeColor: '#5E87DB',
            fillColor: '#5E87DB',
            strokeWeight: 2,
            strokeOpacity: 1,
            fillOpacity: 0.2,
        },
        labelOptions: {
            borderRadius: '2px',
            background: '#FFFBCC',
            border: '1px solid #E1E1E1',
            color: '#703A04',
            fontSize: '12px',
            letterSpacing: '0',
            padding: '5px',
        },
        show: true,
        onReady: onReady
    })
    expect(wrapper.props().onReady.name).toEqual('onReady')
    expect(initDrawingManager).toHaveBeenCalledTimes(1)
    await nextTick()
    expect(addDrawingManager).toHaveBeenCalledTimes(1)
    const readyEvent = wrapper.emitted('ready') as any[]
    expect(readyEvent).toHaveLength(1)
    expect(readyEvent[0][0].bmobj).toBeDefined()
    expect(readyEvent[0][0].open).toBeDefined()
    expect(readyEvent[0][0].close).toBeDefined()
    expect(readyEvent[0][0]).toHaveProperty('bmobj', tool)

})