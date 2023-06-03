export const breakpoints = [320, 375, 425, 768, 1024, 1440, 2560];
/**
 * 종단점
 * @default default 적용하지 않을 경우 가장 작은 디바이스
 * @children_0 small_mobile device
 * @children_1 basic_mobile device
 * @children_2 small_tablet device
 * @children_3 basic_tablet device
 * @children_4 small_pc device
 * @children_5 basic_pc device
 * @children_6 large_pc device
 */
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
