import { shallowMount } from '@vue/test-utils';
import Intro from '@/components/Intro.vue';

describe('Intro.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(Intro, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
