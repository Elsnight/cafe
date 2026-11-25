# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The primary users are Quito residents buying fresh coffee for themselves or their households, usually for local delivery. Secondary commercial users include offices, cafés, restaurants, and gourmet retailers requesting recurring or volume supply.

## Product Purpose

Fausto's Coffee helps people in Quito choose, price, and order freshly roasted coffee for home delivery. The primary product outcome is a complete, accurate order handed off to the business through WhatsApp.

## Positioning

Fausto's Coffee is roasted to order rather than sold from older inventory. Freshness from on-demand roasting is the main reason to choose it over another local coffee seller.

## Operating Context

Customers browse coffee sizes, packs, monthly club plans, and wholesale terms; add quantities to a cart; choose whole bean or ground coffee; select a medium or dark roast; provide contact and Quito delivery details; review totals; and send the prepared order through WhatsApp. Subscription and B2B enquiries also begin through preconfigured WhatsApp messages. The current coffee variety is Typica.

## Capabilities and Constraints

- Spanish-language storefront and ordering flow.
- Local delivery within Quito.
- Package sizes: 100 g, 400 g, 500 g, and 1 kg.
- Monthly coffee-club plans and wholesale enquiries are completed through WhatsApp rather than online payment.
- Customers can select whole bean or ground coffee and medium or dark roast.
- Pricing, promotions, delivery fees, free-delivery threshold, and displayed business hours in the current implementation are confirmed as current.
- Orders are prepared in the site and completed through WhatsApp; the site does not process payment.

## Brand Commitments

- Product name: Fausto's Coffee.
- Fausto is the founder and roaster; the current founder story and quotation are approved.
- The product voice and customer experience are in Spanish.
- The official WhatsApp number and email currently displayed in the site are confirmed.
- There is no approved brand logo or color system yet. Repository graphics and colors must not be treated as durable brand assets without later approval.

## Evidence on Hand

- Confirmed product and delivery terms are encoded in `lib/pricing/pricing.config.ts`.
- The working order flow and WhatsApp handoff are implemented in `app/components/OrderForm.tsx`.
- Product packaging and coffee photography exist under `public/`, but are not confirmed as approved brand assets.
- Sustainable sourcing, direct relationships with local producers, roasting to order, and the Typica offering are confirmed product facts.

## Product Principles

1. Make freshness tangible by centering the roasted-to-order mechanism.
2. Make ordering from a phone straightforward, transparent, and easy to complete through WhatsApp.
3. Preserve trust with accurate pricing, delivery terms, product choices, and totals.
4. Represent Fausto and local producer relationships truthfully, without fabricating proof or claims.
5. Serve the everyday home coffee ritual before expanding toward broader audiences.
