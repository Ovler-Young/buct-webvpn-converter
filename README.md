# Web VPN Converter

*Connect to your local networks in BIT from anywhere in the world.*

> 🥑 WEBVPN Converter can help you convert a BUCT local area network URL into its corresponding WEBVPN URL so that you can access BUCT local resources from anywhere in the world.

## Thanks
This project comes from [Spencer Woo's BIT webvpn project](https://github.com/spencerwooo/bit-webvpn-converter)

[![screenshot](assets/screenshot.png)](https://webvpn.swo.moe)

## API reference

### Base

```http
GET /api/<ENCODED_URL>
```

Note that `ENCODED_URL` must be URL encoded.

### Optional params

* `prefix`: Must be one of `web` (default) or `lib`. Adds either `webvpn.bit.edu.cn` or `libvpn.bit.edu.cn` as prefix to the URL.
* `redirect`: Either `true` or `false` (default). If `true`, the client will be redirected to the converted/encrypted URL directly.

### Example

```http
GET /api/https%3A%2F%2Fbit.edu.cn?prefix=web&redirect=false
```

```json
{
  "url": "https://webvpn.bit.edu.cn/https/77726476706e69737468656265737421f2fe55d222347d1e7d06"
}
```

## Development

```bash
pnpm install
pnpm dev
pnpm build
```

## Changelog

* `May 3, 2022` - Add support for forward converter and reverse *retrevnoc*.
* `Apr 29, 2022` - Migrate from Vue to Next.js with Tailwind CSS.
