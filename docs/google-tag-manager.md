# Google Tag Manager setup

The site is ready for a Google Tag Manager web container. GTM stays disabled while
`NEXT_PUBLIC_GTM_ID` is blank. Malformed IDs and obvious placeholders such as
`GTM-XXXXXXX` are ignored, so neither the script nor its fallback loads.

## Add the real ID later

1. Open `.env.local` in the project root. If it does not exist, copy `.env.example`
   to `.env.local`.
2. Set `NEXT_PUBLIC_GTM_ID` to your actual container ID from Google Tag Manager.
   It must start with `GTM-`; the existing `G-D0WXW3NGXQ` value in `acess` is a GA4
   measurement ID and cannot be used as the container ID.
3. Run `npm run build` and deploy the newly generated `out/` folder. This site
   uses a static export, so changing an environment variable after the build does
   not update already-exported pages. Restart `npm run dev` when testing locally.
4. Configure the tags you want in your GTM container, test them using **Preview**
   and Tag Assistant, then publish the container changes.

If your hosting service builds the project, set `NEXT_PUBLIC_GTM_ID` in that
service's build environment instead. The container ID is public in page source.

## What is installed

- `app/layout.tsx` includes Google's asynchronous bootstrap in the page head,
  and the hidden no-JavaScript iframe first inside the body.
- `lib/google-tag-manager.ts` validates the shared ID and creates both snippets.
- The root layout covers all routes and persists across in-app navigation.
  No per-page installation or additional package is needed.

Installing the container alone does not configure Analytics, Google Ads or click
conversions. Add those tags inside GTM. If using GA4, configure its Google tag there
instead of adding another standalone `gtag.js` installation to the site.

For page views during Next.js client-side navigation, use GA4's browser-history
measurement or a GTM history-change setup, then verify that each navigation sends
one page view. Phone and WhatsApp links can be configured with GTM link-click triggers.

## Verify after activation

In Tag Assistant, open the homepage and navigate to a service page. Confirm the
expected container connects, its tags fire as configured, and page views are not
duplicated. Network tools should show `gtm.js?id=` with your real container ID.
The fallback iframe is only used when JavaScript is disabled.

To disable GTM again, clear `NEXT_PUBLIC_GTM_ID`, rebuild and redeploy.

## References

- [Google: Install a web container](https://support.google.com/tagmanager/answer/14847097?hl=en)
- [Next.js: Environment variables](https://nextjs.org/docs/app/guides/environment-variables)
- [Google: Measure single-page applications](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications)
