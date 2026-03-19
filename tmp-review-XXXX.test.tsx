import { render } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import { SmoothScroll, useScrollCallback } from './src/components/ui/SmoothScroll';

function Probe() {
  useScrollCallback(() => {});
  return <div>probe</div>;
}

describe('effect order', () => {
  it('records scroll listeners', () => {
    const spy = vi.spyOn(window, 'addEventListener');
    render(
      <SmoothScroll>
        <Probe />
      </SmoothScroll>,
    );
    const scrollCalls = spy.mock.calls.filter(([type]) => type === 'scroll');
    console.log(JSON.stringify(scrollCalls.map(([type]) => type)));
    console.log('count=' + scrollCalls.length);
  });
});
