window.settings = {
    // API
    api: "https://api01.dogssr.sbs",
    // 站点名称
    title: '狗云加速器',
    // 站点描述
    description: '连接全世界',
    // 站点介绍 
    introduction: '我们是一个追求更可靠、安全、高效且高性价比的互联网接入方案。',
    // Crisp 客服系统网站 ID
    crisp_id: ''63213e79-2ff9-4ff5-9d72-793fc5d94a6',
    // 客户端配置，只能修改 link 和 items的true/false
    clients: [
        {
            name: "iOS",
            link: "https://apps.apple.com/app/id1234567890",
            items: {
                Shadowrocket: true,
                Loon: true,
            }
        },
        {
            name: "Android",
            link: "https://down.dogssr.sbs/cmfa-2.11.15-meta-arm64-v8a-release.apk",
            items: {
                "Clash Meta": true,
                FlClash: true,
            }
        },
        {
            name: "Windows",
            link: "https://dogssr-1329938531.cos.ap-guangzhou.myqcloud.com/Clash.Verge_2.3.2_x64-setup.exe",
            items: {
                "Clash Verge": true,
                FlClash: true,
            }
        },
        {
            name: "Mac OS",
            link: "https://dogssr-1329938531.cos.ap-guangzhou.myqcloud.com/Clash.Verge_2.3.2_aarch64.dmg",
            items: {
                "Clash Verge": true,
                FlClash: true,
            }
        },
    ],
	// 首页描述
    feature: {
        title: "我们使用最新的技术来提供最佳体验",
        subtitle: "我们致力于提供最可靠、安全、高效且高性价比的互联网接入方案。",
        items: [
            {
                name: "流媒体解锁",
                desc: "我们支持多种流媒体平台的解锁，包括 Netflix、Disney+、Hulu 等，确保您可以随时随地享受高质量的娱乐内容。",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA2NJREFUeF7tWo1N9TAMLJswCmzybQJswiYwyrcJyKiRguufuyStgponPQmektg+ny9O2oft5p+Hm8e/LQAWA26OwCqBmxNgieAqgVUCN0eALYHHbduetm37v+P2ORF+4pt8KZ9YAP7tRiRuAeF9EgAkKfKl/WIAqI2UuF8nAaBODAUCCoAVvFCNotuJYDX7hwBgLT4T/QuumgXye5okBACL5rNQX5PKAkF0qoj2gYQZAFb2wwVPpDmytOwCAkL9CdmaAaAznVIK8fLkMVTSIgBaVL/sxaX+RsbK7PPwruAB0KKqmn4jS4Vd2yoF0x8UAIT6Z5ZLCxshFngAsMGg6vux14QE9Lb/jewotLjtHasWxIMtCwDLWOQkWi6yxosjCgJGBgRqpzah1zyUgQWANpTRH2FLFHxxWEDIbLGlkJaBBQASUHEadUioXw4r2c6QsUEHFYGm2XzoCRAAImqiYH2pqMVuxAoJ6tlBii3RsAw0AClilVNo9mWKBUB9omS1Ia3tyk/NmF86MBIAj4oCVFH/0iDp7LICyZQBBQAjgOhYBICMDQJYffTuYeqvRGkGoEGJwyGyqlQyBuitS5eE1oQpANB16IklwwCPCZYoovZDsDQD0KyKo6gDIwAQe9pXxn69Bf/JEtC9wRQlgLKFYYDXMGkRZLQqHDtyG/RuXhAA9JhaFK3OkAGA2gYZajEdmdcISSCi+F6brDNfi2QNUtQOdwFgiV1tGG1INAASWBS4BFQOR7ojZjrQVKytswBa27I4ypiRhyH0/CH+pWAhAGTPALRD1vioxkuGo6yzp09v/KFUrrwQ8ViABO5lM7s/SA9N6JVYdsGJXonVhx408NbgU/pb3VWhTnqTYpzVW+Y4R/7Dz1Awaha0VXoMgK+VK6N6TkZPNHhLbDNGwveH0YOR1oyKcRFC93kcE7kCWP5F1oV3igiAFhY0xjZ0GlUu2bNBVNyGRtCxmJW0sBQzAKxOKusLOvzvnko/ykcAsCg1IwinvSDRug93p5NYAFZ9vSbCAK83kN+z7YiIoWsorPo9AMhcTbPseV5XVMTk5tf3GAaUhqS8LDmy0SFiNYeWlyfKi5JIr/CzEAtAr6PTzV8ATJeSix1aDLgY8OnMLQZMl5KLHVoMuBjw6cwtBkyXkosd+gb6kDFQV/SfRQAAAABJRU5ErkJggg==",
            },
            {
                name: "AI 平台支持",
                desc: "我们支持多种 AI 平台，包括 OpenAI、Google AI 等，确保您可以使用最新的人工智能技术来提升工作效率和生活质量。",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAA/tJREFUeF7tmzuSE0EMhrU3IecEREBEBBEhAScgJwJuwhWAgBCIuAZcgCss+2+NtmRZaqlfdk/Zk2zZHndLX/96dHv2hi78urlw/+kK4KqA/RB4RkQfiAh/P92Z/XGE6XsJATj9Qzk8BEILALkS0qYhBjmritXG6svrJxE971VBDQDLCGv+GSBuxURwHIuACwDwuvnKAoD8eNLsZN3GbRNJ8IALhzkculWQAZBdeQtMKwQvzNhevSAAg6s6MUYAvNjjCVl+PLGO0xaZesA1TEuV1eEXAZCxB2ciyWWNL4WRdAzzseyt71jgI58OxindbDmTGbwXggSQWVEdLhkbHyDUAMgYwwP3QLC+a809pDSWAGj5V5HdEpKVE14R0beglETORZ9nK1VxM9QLgLNyT2KEo0+Nui9ta60095BmKgDjvyCi95sTelWyhss2GEnxl+gKa8LSVEUJgC4zWYN5Ijj/ZHsBJ7CSrRC8Rqw2LI8MKA2gNyBRCZSDS+f5/cdE9LoRwlk2Q62TWs7/JaIvRPTO2NRkmyWZ+GoWo5gQIwnVdlsl5/9tlvSUSAyBhenaAEkiEQDcm4WQcX5En5AucZkbMwCsUMDYMgPXOH8KCG+3Sf5EaskAYNnpExmG8Ftke3aOY55l7y1GbzhY42LB5NYd4eKGTBZACQLqspwg6/wMJWjneY7PRAQ1VJVBj66lBIZQ6/xICNbKh0qoUQAb6+WE70T05q7URbKfEQ6e7MNwaAEQ5YTqUxlBpDUnyDm13DWEA/taAcDml0T01VjO3v68BQKy/iOR+QEBF97jioDXyAP82f0NPQBWUoJeZXZUq/EoGfYCWAkC28KJDxCkKlCpjirBCACrQbBykJuXRgFYCUKY+WXeGglgJQicAM3mZyaA1SB4PcfD+6MVEDVL5yiRRQizAOxGCTMB7AJCDwDU2DDJbFtTbyt9jrb5ICRaAcjWs7jf3mbLHKqECcu4oaVt7gZg7bnd/baYbUkItQrQmwv2D6EQHj+tGA41AKTs4TifAoWHDkq6p1RCeHyeBVBqL/Vnq4VDsffIAiglPYQFIPDOK5MUT10iXT+zALyDBSsn1JS2WeGQ/l0zC0Dvtfl0hVedX5t77qC+zYCQ/l2zBgD7oZMhJ8Sen6tGQ5gKoFf2niBGQ0g94NGiAA4H3nO3yH42BN0huuWwFUBL25r9zgglaABuKVwRQG+JtAC6T7esCqAVgqee7j4gK9/R93kOYR5+gpSfHud/ptA2DOkERztWM14JQjROeAS3cghI51oghM5jgr0AYBiZR/ejB6y7D0Qi2Z3ic95v8FOk3IWWniw37dqbAobDvQIYjnRnA14VsLMFG27uxSvgP8CdQlAT3LOdAAAAAElFTkSuQmCC",
            },
            {
                name: "隐私保护",
                desc: "我们重视您的隐私，采用先进的加密技术和严格的隐私政策，确保您的数据安全和匿名性。",
                icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABB9JREFUeF7tm0tuFEEMhis34SbATbgBrGAJLMkKbsBNgJvkJgmO2pLl2P7tenVHyUjRRNPVVf4/P6qmuuamvfDXzQvX314BnBABb44x6Z3+7oQNf3fbsysCSOg7IRzpZBDLgawEwKLZ40i0d30pjNkAZomOYFDKyLTpBft43wwA1fCmcVkEvcsI4TTJiKLIGIbRC4CNJoOzIU7GstGRQIZQhdFVL6oAqiGeFe0BqcIo14ssgIrwUdEzYHBqwKjIACAvoHBcJXoUBgEIISAAkfjdoiMYvKiy2oQQEIBvRo9XEa5NYwhWtFo64DSovX9V4ZbXP6jZ6be3dogiQAOA+ZSZvDe1oWggCPwi5xGEJ68IQJrigCgOV1iti2NcFgAJ/nqI0blKEP4d19ycTYKYAkAb0WsUi0ZTqdb2/f8HvWNSXyn7oxRIdQA8Qn2wx5POe9KsF0TK/pUA/iQWUFkoPRBOBZAVTw6g1KD26EU14j1qJK6fBsALexIg64D0ajZVKhBOAWAJYaPvlfd0+lnXrf6y6bAdQGSsvmZ5UqcNhTu1s9KJr0UZcQkA7GUNwPJiBElHRyYVtgPQRkqR+prlQV0MpUirUKIo2AoAhTjKfw7lqJ1OBVQLtgJAxs0AEEWIVQu2AkAC0XUW4BXCTIRoCKcCKKxXhppGdWAbgM+ttR9DMvpv/tRa++Xcvg3Ax9baz34NQ3d+aa3drgKQ3RDJruWHlDo3eykwZT8gC4Bsi4pcpXqjYomuM6fTAWjPZA2P2llLbe/rfHo/c9amqJ6+9FJ1BYBoITQFQDqMnO/0Ei6a3yl0rVoi+4iW2rpELAFAg0R7dFEUoJUi9y23z9B+QWU3q+u5gCXY7cjxIIvIFEIPUnVPwHqc5zoOPRrTM4H7gOGIQeu7O0NAdWDWhkg6/MlmBEDXAZQG1pRInxGEt4UtMX5GYO0oI5u1t6OohQDI+Mp6wCtm3iKIp0vtfa89+gpcCv9MBFgAMlGQ3eSsrA7RBohlF3yeicKJOrXSAHYc1ISKaGpLY5Hn0fPDsvezEcBhrR9thbklVI5EAwp5b+nL4BC0VA3gQaozgvY0Fyf0qCzrcdm/ti2Tpo/3Z1IgooymRS/cramKvVZNEUt8NkVLALxU6IVQFWq1t/I+Lb4aAWzA8KAzlB9rCuuMAcx7OX4lBVDO7YoE78xi1/i9ALz1Qbr6dkaBNSVTV13ie1MARcIqCN6ZxW7xMwB4hZEhlQqSExXRMd3h/kdSQNobnSgtH2A+Okbnk4fFz4qAaHaQkLIgkPCpBzZnRUA2GmRq8P/8own5YyqvRk7x+oxpMFPEo7TI3C/bTPX6LgBcIOX7ZYSzIStSwBIZneS22i/zuB5sFwA5rj7bL388OfwjqGqInQGgauPS9q8AluJ9Bp0/AHBuS1BAJyWWAAAAAElFTkSuQmCC",
            },
        ]
    }
}
