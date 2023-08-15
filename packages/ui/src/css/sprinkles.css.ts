import { calc } from '@vanilla-extract/css-utils';
import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';

import type { Breakpoint, breakpointNames } from './breakpoints';
import { breakpoints } from './breakpoints';
import { vars } from './vars.css';

const flexAlignment = [
  'flex-start',
  'center',
  'start',
  'flex-end',
  'stretch',
] as const;

const negativeSpace = {
  '-2px': `${calc(vars.space['2px']).negate()}`,
};

const extendedSpace = {
  '100%': '100%',
  '75%': '75%',
  '60%': '60%',
  '50%': '50%',
  full: '100%',
  auto: 'auto',
  fit: 'fit-content',
  screenMm: 166,
  screenXx: 394,
  screenSm: breakpoints.sm,
  screenMd: breakpoints.md,
  screenLg: breakpoints.lg,
  screenXl: breakpoints.xl,
} as const;

const margin = { ...vars.space, auto: 'auto' };
const extendedHeight = { '100vh': '100vh', '100svh': '100svh' };

const responsiveProperties = defineProperties({
  conditions: {
    xs: {},
    sm: { '@media': `(min-width: ${breakpoints.sm}px)` },
    md: { '@media': `(min-width: ${breakpoints.md}px)` },
    lg: { '@media': `(min-width: ${breakpoints.lg}px)` },
    xl: { '@media': `(min-width: ${breakpoints.xl}px)` },
    xxl: { '@media': `(min-width: ${breakpoints.xxl}px)` },
  },
  defaultCondition: 'xs',
  responsiveArray: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  properties: {
    display: [
      'block',
      'flex',
      'grid',
      'inline',
      'inline-flex',
      'inline-block',
      'none',
      'contents',
    ],
    flexDirection: ['column', 'row', 'column-reverse'],
    alignItems: ['center', 'end', 'baseLine', 'inherit', ...flexAlignment],
    flexWrap: ['wrap', 'nowrap'],
    flexGrow: [1],
    flexShrink: [0],
    overflow: ['auto', 'hidden', 'scroll', 'unset'],
    overflowY: ['auto', 'hidden', 'scroll'],
    overflowX: ['auto', 'hidden', 'scroll'],
    position: ['absolute', 'fixed', 'relative', 'sticky'],
    textAlign: ['center', 'left', 'right'],
    justifyContent: [...flexAlignment, 'space-around', 'space-between'],
    justifyItems: [...flexAlignment, 'space-around', 'space-between'],
    justifySelf: [...flexAlignment],
    inset: { ...vars.space, ...negativeSpace },
    height: { ...vars.space, ...extendedSpace, ...extendedHeight },
    left: { ...vars.space, ...negativeSpace },
    marginBottom: { ...margin, ...negativeSpace },
    marginLeft: { ...margin, ...negativeSpace },
    marginRight: { ...margin, ...negativeSpace },
    marginTop: { ...margin, ...negativeSpace },
    margin: { ...margin, ...negativeSpace },
    padding: { ...vars.space, ...negativeSpace },
    maxHeight: vars.space,
    maxWidth: {
      ...vars.space,
      ...extendedSpace,
      none: 'none',
    },
    minHeight: { ...vars.space, ...extendedSpace, ...extendedHeight },
    minWidth: vars.space,
    paddingBottom: vars.space,
    paddingLeft: vars.space,
    paddingRight: vars.space,
    paddingTop: vars.space,
    fontSize: {
      ...vars.fontSizes,
      inherit: 'inherit',
    },
    right: { ...vars.space, ...negativeSpace },
    top: { ...vars.space, ...negativeSpace },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none',
    },
    boxShadow: vars.shadows,
    width: {
      ...vars.space,
      ...extendedSpace,
    },
    zIndex: {
      '0': 0,
      '1': 1,
      ribbon: 9,
      dropdown: 10,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '75': 75,
      '99': 99,
      '100': 100,
      modal: 100,
      auto: 'auto',
    },
    borderTop: {
      none: 'none',
    },
    borderRadius: vars.radii,
    borderTopLeftRadius: vars.radii,
    borderBottomRightRadius: vars.radii,
    borderTopRightRadius: vars.radii,
    borderBottomLeftRadius: vars.radii,
    gap: {
      ...vars.space,
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1.5rem',
    },
    rowGap: {
      ...vars.space,
      sm: '0.5rem',
      md: '0.75rem',
      lg: '1.5rem',
    },
    gridAutoRows: ['auto'],
    opacity: {
      '0.5': 0.5,
      '0.6': 0.6,
    },
    lineHeight: {
      '1rem': '1rem',
    },
    borderBottomColor: vars.colors,
    border: {
      '1px solid #c1c8d1': '1px solid #c1c8d1',
      none: 'none',
    },
    borderBottom: {
      none: 'none',
    },
    background: vars.colors,
    backgroundColor: vars.colors,
    listStyleType: ['disc', 'none'],
  },
  shorthands: {
    borderLeftRadius: ['borderBottomLeftRadius', 'borderTopLeftRadius'],
    borderRightRadius: ['borderBottomRightRadius', 'borderTopRightRadius'],
    borderTopRadius: ['borderTopLeftRadius', 'borderTopRightRadius'],
    borderBottomRadius: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    mt: ['marginTop'],
    mb: ['marginBottom'],
    m: ['margin'],
    ml: ['marginLeft'],
    mr: ['marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    mx: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    my: ['marginTop', 'marginBottom'],
    pl: ['paddingLeft'],
    pr: ['paddingRight'],
    pt: ['paddingTop'],
    pb: ['paddingBottom'],
    p: ['padding'],
    paddingX: ['paddingLeft', 'paddingRight'],
    px: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    py: ['paddingTop', 'paddingBottom'],
    size: ['width', 'height'],
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    isolation: ['isolate'],
    objectFit: ['contain', 'cover', 'none'],
    pointerEvents: ['none'],
    textTransform: ['capitalize', 'lowercase', 'uppercase'],
    cursor: ['default', 'pointer', 'not-allowed'],
    visibility: ['hidden', 'visible'],
    whiteSpace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap'],
    wordBreak: ['break-word'],
    wordWrap: ['normal', 'break-word'],
  },
});

const interactiveProperties = defineProperties({
  conditions: {
    base: {},
    hover: { selector: '&:hover' },
    focus: { selector: '&:focus' },
    active: { selector: '&:active' },
  },
  defaultCondition: 'base',
  properties: {
    background: vars.colors,
    backgroundColor: vars.colors,
    borderColor: vars.colors,
    color: vars.colors,
    outlineColor: vars.colors,
    opacity: {
      '0': 0,
      '0.5': 0.5,
      '0.6': 0.6,
      '1': 1,
    },
  },
  shorthands: {
    bgc: ['backgroundColor'],
    bg: ['background'],
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  unresponsiveProperties,
  interactiveProperties
);
export type Sprinkles = Parameters<typeof sprinkles>[0];

export type OptionalResponsiveObject<Value> =
  | Value
  | Partial<Record<Breakpoint, Value>>;
export type RequiredResponsiveObject<Value> = Partial<
  Record<Breakpoint, Value>
> &
  Record<(typeof breakpointNames)[0], Value>;
