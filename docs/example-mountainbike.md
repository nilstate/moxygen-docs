---
title: Example Mountain Bike Module
description: Generated Markdown for the MountainBike group in the bundled example
---

# group `mountainbike` {#group__mountainbike}

Mountain bike module contains the `MountainBike` class. Mountain bikes are built for rough terrain.

## Summary

Members | Descriptions
--- | ---
`class `[`transport::MountainBike`](#classtransport_1_1MountainBike) | Mountain bike implementation of a [Bicycle](./example-bicycle.md#classtransport_1_1Bicycle).

# class `transport::MountainBike` {#classtransport_1_1MountainBike}

```text
class transport::MountainBike
  : public transport::Bicycle
```

Mountain bike implementation of a [Bicycle](./example-bicycle.md#classtransport_1_1Bicycle).

[MountainBike](#classtransport_1_1MountainBike) provides a bike for rough terrain. If you are looking for something optimized for road speed, use [RacingBike](./example-racingbike.md#classtransport_1_1RacingBike) instead.

## Summary

Members | Descriptions
--- | ---
`public bool `[`SetSuspension`](#classtransport_1_1MountainBike_1a04caecd7e5ff7572b6ac1dc283510301)`(double stiffness)` | Set suspension stiffness.
`public template<> inline bool `[`ChangeBreak`](#classtransport_1_1MountainBike_1afd02513876a196e98acaacdc555aeb52)`(BreakType breakType)` | Change the brake type.

## Members

#### `public bool `[`SetSuspension`](#classtransport_1_1MountainBike_1a04caecd7e5ff7572b6ac1dc283510301)`(double stiffness)` {#classtransport_1_1MountainBike_1a04caecd7e5ff7572b6ac1dc283510301}

Set suspension stiffness.

Returns `true` if the suspension was adjusted successfully, otherwise `false`.

#### `public template<> inline bool `[`ChangeBreak`](#classtransport_1_1MountainBike_1afd02513876a196e98acaacdc555aeb52)`(BreakType breakType)` {#classtransport_1_1MountainBike_1afd02513876a196e98acaacdc555aeb52}

Change the brake type.

Returns `true` if the brake was adjusted successfully, otherwise `false`.
