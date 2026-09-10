# Homepage service images

The homepage uses dedicated landscape WebP assets from `public/home-services/`,
plus the earlier duct area image at `public/balcony/ductarea-nets.webp`, restored at the user's request.
Each card displays its image in a 16:10 frame with descriptive alt text. Images illustrate the service;
generated visuals are not presented as photographs of completed customer projects.

## New images

Created using the built-in image generation tool, then converted to 1200 × 750 WebP.
The exact prompts and individual output paths are recorded in:

- [Balcony services](home-service-images-balcony.md): invisible grills, balcony safety nets and pigeon safety nets.
- [Specialist services](home-service-images-specialist.md): sports practice nets, construction safety nets and an unused alternative duct area image.
- [Children safety nets](home-service-images-children.md).

## Selected existing images

These existing project images were retained or selected for their clear service detail,
then cropped and optimized into dedicated homepage assets. Original files are preserved.

| Homepage asset | Source file | Output dimensions |
| --- | --- | --- |
| `public/home-services/cloth-hangers.webp` | `public/services/cloth-hangers.webp` | 1200 × 750 |
| `public/home-services/anti-bird-spikes.webp` | `public/images/images-slider-55.webp` | 1024 × 640 |
| `public/home-services/staircase-safety-nets.webp` | `public/images/staircase.jpg` | 1200 × 750 |
| `public/home-services/open-area-safety-nets.webp` | `public/images/open-area-safety-nets.webp` | 1024 × 640 |

The cloth hanger generation prompt is in [cloth-hangers-image.md](cloth-hangers-image.md).
The staircase source's white border was excluded from its crop. The other crops are centered.
Existing 1024-pixel images were not enlarged.
