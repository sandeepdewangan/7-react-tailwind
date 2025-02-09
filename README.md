# React

### Important Properties

1. Text Color: `text-red-500`
2. Background Color: `bg-yellow-200`
3. Font size: `text-3xl`
4. Font weight: `font-semibold`
5. Letter spacing: `tracking-widest` | `tracking-[1em]`
6. Alignment of text (horizontally): `text-center` | `text-justify` | `text-start`
7. Padding and Margin: `px-2` | `mx-2`
8. Border: `border-b-2 border-orange-300`
9. Spacing between two elements: `space-x-4`
10. Box model setting width and height: `h-80` | `w-71` | `h-1/2` (50%)
11. Entire height of view port: `h-screen`
12. Set only specific element to scroll: `overflow-scroll`
13. Center the whole context: `mx-auto`
14. Rounded element: `rounded-2xl`
15. Opacity: `bg-stone-300/30` (30% opacity)
16. Background blur: `backdrop-blur-sm`
17. Flex related: `flex items-center justify-center`

### Flex

`flex` -> Arrange items in one row.
`justify-center` | `justify-between` | `justify-around` -> Pull items into specified way horizontally.
`items-center` | `items-end` -> Vertical alignment of items.

### Grid

`grid grid-rows-1 grid-cols-3` -> One row and three columns.
`gap-4` -> Space or gap between grid elements.

### Element State and Transitions

`hover:text-orange-300` -> Hovering and changing colors.
`transition-colors duration-500` -> Transition of colors for 500ms.
`active:bg-red-500` -> When button is pressed, red background is set.

### Re-using Styles

Apply the Rules

```css
@layer components {
  .input {
    @apply bg-amber-100 rounded-lg px-2 py-1 focus:outline-amber-600;
  }
}
```

Usage

`<input type="text" className="input" />`

### Absolute Position and Z Index

`absolute` -> Places the element in front of text or other elements.
`inset-0` -> Stretch to entire viewport from left, right, top, bottom.

Custom Centered Loader

```html
<div
  className="absolute bg-stone-300/30 inset-0 backdrop-blur-sm flex items-center justify-center"
></div>
```
