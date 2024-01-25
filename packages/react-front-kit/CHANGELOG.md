# @smile/react-front-kit

## 0.9.0

### Minor Changes

- [#122](https://github.com/Smile-SA/react-front-kit/pull/122) [`f245ab1`](https://github.com/Smile-SA/react-front-kit/commit/f245ab1afb6678112ead26a707ae435aa192afcd) Thanks [@vapersmile](https://github.com/vapersmile)! - add CardHeader

- [#115](https://github.com/Smile-SA/react-front-kit/pull/115) [`b401a10`](https://github.com/Smile-SA/react-front-kit/commit/b401a105ac73ee1fc32904c04d0e9d2cf68dea31) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Refactored SidebarFilters to use SidebarMenu instead of a slightly modified copy. Improved SidebarMenu.

- [#121](https://github.com/Smile-SA/react-front-kit/pull/121) [`f80ac3b`](https://github.com/Smile-SA/react-front-kit/commit/f80ac3bb9769f939b97457354f82a11bdae5e29c) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added SummaryBox component

- [#117](https://github.com/Smile-SA/react-front-kit/pull/117) [`4e43c00`](https://github.com/Smile-SA/react-front-kit/commit/4e43c0008121aeea4f165a560537c74b77f95f8f) Thanks [@vapersmile](https://github.com/vapersmile)! - add ButtonListOrDropdown component

- [#120](https://github.com/Smile-SA/react-front-kit/pull/120) [`f1a52d1`](https://github.com/Smile-SA/react-front-kit/commit/f1a52d157058eef1449aecddef838aaf3ea70733) Thanks [@vapersmile](https://github.com/vapersmile)! - add MenuLanguages component

- [#119](https://github.com/Smile-SA/react-front-kit/pull/119) [`a54b91d`](https://github.com/Smile-SA/react-front-kit/commit/a54b91de3fb1e30f81108c0d0d2e8a8d0fcf40ab) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Extracted logic from ActionBar into new ActionRowOverflow, moved a type and some mocks

### Patch Changes

- Updated dependencies []:
  - @smile/react-front-kit-shared@0.9.0

## 0.8.1

### Patch Changes

- [`99c4ab4`](https://github.com/Smile-SA/react-front-kit/commit/99c4ab4617b011cfb0a3231f8c29a9e3da0d3d1e) Thanks [@tonai](https://github.com/tonai)! - Fix server exports

- Updated dependencies []:
  - @smile/react-front-kit-shared@0.8.1

## 0.8.0

### Minor Changes

- [#103](https://github.com/Smile-SA/react-front-kit/pull/103) [`8de409b`](https://github.com/Smile-SA/react-front-kit/commit/8de409beb7b786671121911ec2a2d015bec23038) Thanks [@github-actions](https://github.com/apps/github-actions)! - Reduce margin for actives filters section for mobile display

- [#104](https://github.com/Smile-SA/react-front-kit/pull/104) [`094821a`](https://github.com/Smile-SA/react-front-kit/commit/094821a12e813d1b554d2df4a26c7a66d523ed69) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added responsive style to FoldableColumnLayout

- [#105](https://github.com/Smile-SA/react-front-kit/pull/105) [`4915a4b`](https://github.com/Smile-SA/react-front-kit/commit/4915a4bfc8c6fdf23116fbb578d3550868ecb0f8) Thanks [@vapersmile](https://github.com/vapersmile)! - add mobile display and add fix table background actions

- [#106](https://github.com/Smile-SA/react-front-kit/pull/106) [`a5294aa`](https://github.com/Smile-SA/react-front-kit/commit/a5294aa59a52282465e91f92893393f4d63544ff) Thanks [@vapersmile](https://github.com/vapersmile)! - Add accordion menu for ActionBar component

- [#109](https://github.com/Smile-SA/react-front-kit/pull/109) [`bba3962`](https://github.com/Smile-SA/react-front-kit/commit/bba3962ddadb0e5a41b32259536899a7677c4b27) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added mobile style for DocumentCard and DocumentList, various fixes on DocumentCard, SelectableList and DocumentList, updated example of DocumentList in SearchResults page, added '\*.png' module to global.d.ts

- [#107](https://github.com/Smile-SA/react-front-kit/pull/107) [`ce44552`](https://github.com/Smile-SA/react-front-kit/commit/ce44552ca95bdc7b18934a0ea222af63a72e2f79) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Fixed and adjusted mobile styles for Breadcrumbs, Pagination, SearchBar, FoldableColumnLayout, InfoCard, Table. Modified example pages. Added test file to FilterList.

### Patch Changes

- Updated dependencies [[`320634d`](https://github.com/Smile-SA/react-front-kit/commit/320634d7ec2048a328cfda1dbcff5d1b70a32563)]:
  - @smile/react-front-kit-shared@0.8.0

## 0.7.0

### Minor Changes

- [#87](https://github.com/Smile-SA/react-front-kit/pull/87) [`dbc06ca`](https://github.com/Smile-SA/react-front-kit/commit/dbc06ca55961b69663ab7fdc02609c6525ae361d) Thanks [@tonai](https://github.com/tonai)! - Add theme provider and update barrel file for better next.js compatibility

- [#93](https://github.com/Smile-SA/react-front-kit/pull/93) [`7415d9b`](https://github.com/Smile-SA/react-front-kit/commit/7415d9b9d119abfc850dda2ab6fa94845e72aee6) Thanks [@tonai](https://github.com/tonai)! - Add Preview component

- [#95](https://github.com/Smile-SA/react-front-kit/pull/95) [`5696400`](https://github.com/Smile-SA/react-front-kit/commit/5696400e6f703da52db5f7199b50f8251fa76726) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `FilterList` component, renamed `FiltersBar` in `SidebarFilters`
  and `FiltersCheckboxList` in `SearchableCheckboxList`,
  refactored `SearchableCheckboxList`, added common `IFilter` type in shared
  package, added topContent prop to `SwitchableView`, fixed `BrowsingPage` with
  name changes.

- [#86](https://github.com/Smile-SA/react-front-kit/pull/86) [`eede698`](https://github.com/Smile-SA/react-front-kit/commit/eede698ce172e20eb1de4c70e3d59b7510afb9df) Thanks [@vapersmile](https://github.com/vapersmile)! - Add FitlersCheckboxList Component

- [#88](https://github.com/Smile-SA/react-front-kit/pull/88) [`480af11`](https://github.com/Smile-SA/react-front-kit/commit/480af1122b41e28d938bd665c1aa998272c99d9a) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `HeaderMobile` and `HeaderNav` components, reworked `Header` with mobile mode, added optional placeholder to `SearchBar`, improved info returned by collapseButtonProps in `SidebarMenu`

- [#94](https://github.com/Smile-SA/react-front-kit/pull/94) [`70b674f`](https://github.com/Smile-SA/react-front-kit/commit/70b674f3513b4bf996e8f83a46c8a132ca3712ac) Thanks [@vapersmile](https://github.com/vapersmile)! - Add collapse function for infoCard component

### Patch Changes

- Updated dependencies [[`dbc06ca`](https://github.com/Smile-SA/react-front-kit/commit/dbc06ca55961b69663ab7fdc02609c6525ae361d), [`5696400`](https://github.com/Smile-SA/react-front-kit/commit/5696400e6f703da52db5f7199b50f8251fa76726)]:
  - @smile/react-front-kit-shared@0.7.0

## 0.6.0

### Minor Changes

- [#80](https://github.com/Smile-SA/react-front-kit/pull/80) [`0e819ee`](https://github.com/Smile-SA/react-front-kit/commit/0e819eebaa3b8feeb9ce1d1ae1ac37358c383d2e) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Extracted action bar from `ThumbnailGrid` into new component.
  Added `ActionBar`, `SelectableList` and `DocumentList` components.
  Updated `SearchPage` example page.

- [#81](https://github.com/Smile-SA/react-front-kit/pull/81) [`7f276b2`](https://github.com/Smile-SA/react-front-kit/commit/7f276b27e9c2ca2b746ad0f39deaee49cbf8bb90) Thanks [@vapersmile](https://github.com/vapersmile)! - Add the filtersBar component and add it to the searchResult page

- [#79](https://github.com/Smile-SA/react-front-kit/pull/79) [`a0aa52b`](https://github.com/Smile-SA/react-front-kit/commit/a0aa52b8f10f264600704ec4aeee8a146d17cc9d) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `defaultOpened` prop to `CollapseButton`

- [#74](https://github.com/Smile-SA/react-front-kit/pull/74) [`0ad5377`](https://github.com/Smile-SA/react-front-kit/commit/0ad5377535e7c19941da301e8a2ee7298ab70f91) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Refactored actions in `ThumbnailGrid` and `TableGridView` components, moved `typeGuard` helper to shared package, added `typeGuardInterface` function, added tests

### Patch Changes

- Updated dependencies [[`0ad5377`](https://github.com/Smile-SA/react-front-kit/commit/0ad5377535e7c19941da301e8a2ee7298ab70f91)]:
  - @smile/react-front-kit-shared@0.6.0

## 0.5.0

### Minor Changes

- [#72](https://github.com/Smile-SA/react-front-kit/pull/72) [`c8d3d94`](https://github.com/Smile-SA/react-front-kit/commit/c8d3d946cb0ded4ed26d4b8be249eff45d3d56f6) Thanks [@tonai](https://github.com/tonai)! - Add dynamic componentProps property in actions

- [#65](https://github.com/Smile-SA/react-front-kit/pull/65) [`bd9cfe4`](https://github.com/Smile-SA/react-front-kit/commit/bd9cfe42d0b22f5f7f5e7b0de30fdfb22ad3e1c8) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Reworked action/confirm types and moved then in `react-front-kit-shared` then refactored types in `Table`, `Thumbnail` and `ConfirmModal` , Added `ThumbnailGrid` and `TableGridView` components,

- [#68](https://github.com/Smile-SA/react-front-kit/pull/68) [`c8b5a39`](https://github.com/Smile-SA/react-front-kit/commit/c8b5a3978c8ce7133da0b498d9f0b326f07eb737) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `storybook-pages` package containing example pages, renamed `TestPage`
  into `BrowsingPage` and completed it with integration of `TableGridView`, fixed
  various component styles and props related to page.

- [#69](https://github.com/Smile-SA/react-front-kit/pull/69) [`5578d5d`](https://github.com/Smile-SA/react-front-kit/commit/5578d5db7543b679e405a74e5249908afa435628) Thanks [@vapersmile](https://github.com/vapersmile)! - Add filters component

- [#70](https://github.com/Smile-SA/react-front-kit/pull/70) [`51b1d80`](https://github.com/Smile-SA/react-front-kit/commit/51b1d80b264a9003f9790837fb16dde3869e1915) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `BEST_PRACTICES.md` documentation file

### Patch Changes

- [#72](https://github.com/Smile-SA/react-front-kit/pull/72) [`c8d3d94`](https://github.com/Smile-SA/react-front-kit/commit/c8d3d946cb0ded4ed26d4b8be249eff45d3d56f6) Thanks [@tonai](https://github.com/tonai)! - Add server barrel files

- [#72](https://github.com/Smile-SA/react-front-kit/pull/72) [`c8d3d94`](https://github.com/Smile-SA/react-front-kit/commit/c8d3d946cb0ded4ed26d4b8be249eff45d3d56f6) Thanks [@tonai](https://github.com/tonai)! - Fix responsiveTabs when layout switch between columns and rows

- Updated dependencies [[`c8d3d94`](https://github.com/Smile-SA/react-front-kit/commit/c8d3d946cb0ded4ed26d4b8be249eff45d3d56f6), [`bd9cfe4`](https://github.com/Smile-SA/react-front-kit/commit/bd9cfe42d0b22f5f7f5e7b0de30fdfb22ad3e1c8), [`c8d3d94`](https://github.com/Smile-SA/react-front-kit/commit/c8d3d946cb0ded4ed26d4b8be249eff45d3d56f6), [`c8b5a39`](https://github.com/Smile-SA/react-front-kit/commit/c8b5a3978c8ce7133da0b498d9f0b326f07eb737)]:
  - @smile/react-front-kit-shared@0.5.0

## 0.4.0

### Minor Changes

- [#51](https://github.com/Smile-SA/react-front-kit/pull/51) [`9e64dde`](https://github.com/Smile-SA/react-front-kit/commit/9e64dde39e037bee540207502e5a7dcb68c11925) Thanks [@tonai](https://github.com/tonai)! - Upsate `Sidebar` and `CollapseButton` to be compatible with routing links

- [#50](https://github.com/Smile-SA/react-front-kit/pull/50) [`0941a7e`](https://github.com/Smile-SA/react-front-kit/commit/0941a7e175aba0575600fa53552b0edea3464c93) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Moved part of `HeaderSearch` into new `SearchBar` component, added leftSection to `SearchBar`

- [#56](https://github.com/Smile-SA/react-front-kit/pull/56) [`2be34ea`](https://github.com/Smile-SA/react-front-kit/commit/2be34ea62b9128e6e451f2fc77a9bc05d2567210) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `SwitchableView` component with SegmentedControl

- [#60](https://github.com/Smile-SA/react-front-kit/pull/60) [`5e00f26`](https://github.com/Smile-SA/react-front-kit/commit/5e00f2623115017f19cd4058310ac00fca5f3b17) Thanks [@vapersmile](https://github.com/vapersmile)! - Add DocumentCard Component

- [#54](https://github.com/Smile-SA/react-front-kit/pull/54) [`0e4c83a`](https://github.com/Smile-SA/react-front-kit/commit/0e4c83a33bc17b0a0e28897076ee8dd78ed06368) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `SearchResults` example page, modified `Pagination`, `SearchBar`, `Header`
  and `FoldableColumnLayout` components to accommodate needs of search page

- [#58](https://github.com/Smile-SA/react-front-kit/pull/58) [`4df79a0`](https://github.com/Smile-SA/react-front-kit/commit/4df79a04be3a8a0fa00de3d3679989ca9112a035) Thanks [@vapersmile](https://github.com/vapersmile)! - Add thumbnail component and his defaultImage.jpg

### Patch Changes

- [#55](https://github.com/Smile-SA/react-front-kit/pull/55) [`0caaaf8`](https://github.com/Smile-SA/react-front-kit/commit/0caaaf86de2ef60a210541415ea32e2af103dad4) Thanks [@tonai](https://github.com/tonai)! - remove `AppShell` from `FoldableColumnLayout`

- [#53](https://github.com/Smile-SA/react-front-kit/pull/53) [`01ee3ea`](https://github.com/Smile-SA/react-front-kit/commit/01ee3ea74827cb6e3d4041b50fbab959750135ff) Thanks [@tonai](https://github.com/tonai)! - Use `Paper` for `InfoCard`, update test page and refactor `Pagination` `itemsPerPage` prop

- Updated dependencies [[`01ee3ea`](https://github.com/Smile-SA/react-front-kit/commit/01ee3ea74827cb6e3d4041b50fbab959750135ff)]:
  - @smile/react-front-kit-shared@0.4.0

## 0.3.0

### Minor Changes

- [#45](https://github.com/Smile-SA/react-front-kit/pull/45) [`48189c8`](https://github.com/Smile-SA/react-front-kit/commit/48189c80a2a1d8ee7307c3cd17feb995a3a458c4) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `Document Details` example page, added `ResponsiveTabs` example to it, fixed bug on `ResponsiveTabs`

- [#46](https://github.com/Smile-SA/react-front-kit/pull/46) [`ffe24fc`](https://github.com/Smile-SA/react-front-kit/commit/ffe24fc17c890206d0cf344c156ffbd90421ff65) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `DocumentView` iframe to `DocumentDetails` example page

- [#44](https://github.com/Smile-SA/react-front-kit/pull/44) [`9ab7be5`](https://github.com/Smile-SA/react-front-kit/commit/9ab7be5365efaa604d795b974983f1aa05eb61e4) Thanks [@vapersmile](https://github.com/vapersmile)! - Added code preview for page components and added turbo generation

- [#43](https://github.com/Smile-SA/react-front-kit/pull/43) [`0d55bcc`](https://github.com/Smile-SA/react-front-kit/commit/0d55bcc0957c9bbaeaafb7780041e0b8ba9df69b) Thanks [@tonai](https://github.com/tonai)! - Add `onMenuOpen` props for `SidebarMenu` + minor fixes

- [#42](https://github.com/Smile-SA/react-front-kit/pull/42) [`83ffae5`](https://github.com/Smile-SA/react-front-kit/commit/83ffae582eebe204f6ff37558e32057aa490c255) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `ResponsiveTabs` component

### Patch Changes

- [#38](https://github.com/Smile-SA/react-front-kit/pull/38) [`195cc64`](https://github.com/Smile-SA/react-front-kit/commit/195cc640d563e7630a7d99a4865c7bf97b847e09) Thanks [@vapersmile](https://github.com/vapersmile)! - Add BitConverter, TruncateString, Dropzone and DropzoneCard components

- Updated dependencies []:
  - @smile/react-front-kit-shared@0.3.0

## 0.2.0

### Minor Changes

- [#13](https://github.com/Smile-SA/react-front-kit/pull/13) [`b0af785`](https://github.com/Smile-SA/react-front-kit/commit/b0af7850caae2b04e56821e19a7eee82bacc5e7a) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `hasOnlyOneOpenMenu` prop to `SidebarMenu`

  Reworked `CollapseButton` into Uncontrolled and Controlled versions

- [#22](https://github.com/Smile-SA/react-front-kit/pull/22) [`d95bf09`](https://github.com/Smile-SA/react-front-kit/commit/d95bf09b29134f849babb0c257b6c5a41f45f2d4) Thanks [@vapersmile](https://github.com/vapersmile)! - Add `ConfirmModal` component

- [#26](https://github.com/Smile-SA/react-front-kit/pull/26) [`ab07235`](https://github.com/Smile-SA/react-front-kit/commit/ab072356e47a2964183391c924909593d19244bd) Thanks [@tonai](https://github.com/tonai)! - Manage actions for `Table` component

- [#20](https://github.com/Smile-SA/react-front-kit/pull/20) [`ff9e28e`](https://github.com/Smile-SA/react-front-kit/commit/ff9e28e4049f7c5552756b108d6394caf67c0bef) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Added `FoldableColumnLayout` layout, updated `TestPage`

### Patch Changes

- [#19](https://github.com/Smile-SA/react-front-kit/pull/19) [`d3f9d1b`](https://github.com/Smile-SA/react-front-kit/commit/d3f9d1b2b2fee4c166671950894c7eda4fa662e9) Thanks [@tonai](https://github.com/tonai)! - Fix icon colors and table tooltips

- [#31](https://github.com/Smile-SA/react-front-kit/pull/31) [`64d63ff`](https://github.com/Smile-SA/react-front-kit/commit/64d63ffd1d3f9c83dc745d621f764ad54ac5efc1) Thanks [@vapersmile](https://github.com/vapersmile)! - Add `DropzoneCard` component

- [#25](https://github.com/Smile-SA/react-front-kit/pull/25) [`870e9b5`](https://github.com/Smile-SA/react-front-kit/commit/870e9b520e58085dba64c27892a651784c56e448) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Modified padding of `FoldableColumnLayout`, Added `Button` that adds new `SidebarMenu` folders as example to `TestPage`

## 0.1.0

### Minor Changes

- [#10](https://github.com/Smile-SA/react-front-kit/pull/10) [`f4a2c9b`](https://github.com/Smile-SA/react-front-kit/commit/f4a2c9b332346276ac4e05235ebda5ce02f52aab) Thanks [@vapersmile](https://github.com/vapersmile)! - Add table component

- [#5](https://github.com/Smile-SA/react-front-kit/pull/5) [`6949191`](https://github.com/Smile-SA/react-front-kit/commit/69491915691b14b9841557ad23f8bce4c7437687) Thanks [@vapersmile](https://github.com/vapersmile)! - Add breadcrumbs component

- [#3](https://github.com/Smile-SA/react-front-kit/pull/3) [`44aac62`](https://github.com/Smile-SA/react-front-kit/commit/44aac629b5e6dc5cc036e1964a06f7fd6cc863af) Thanks [@QuentinLeCaignec](https://github.com/QuentinLeCaignec)! - Add pagination component

- [`ffe1c9c`](https://github.com/Smile-SA/react-front-kit/commit/ffe1c9c54b9467fc21d92584164c99cadc73b92b) Thanks [@tonai](https://github.com/tonai)! - Add header components

- [`bd8913d`](https://github.com/Smile-SA/react-front-kit/commit/bd8913d7c70dd9aa7221b8093cd567be2a80dfdd) Thanks [@tonai](https://github.com/tonai)! - Add sidebar components
