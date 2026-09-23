// ============================================================
// Tao Wan homepage content
// Edit THIS file for normal updates. You usually do not need to touch
// index.html or stylesheet.css.
//
// Simple formatting supported in bio/authors:
//   **bold text**
//   [link text](https://example.com)
// ============================================================

window.siteData = {
  profile: {
    name: "Tao Wan",
    tagline: "Ph.D. Student · SUSTech · High-rate Visual Perception & Event-based Vision",
    photo: "assets/img/tao_wan.jpg",
    photoFallback: "TW",

    socialLinks: [
      {
        label: "Email",
        url: "mailto:want2025@mail.sustech.edu.cn",
        icon: "email"
      },
      {
        label: "CV",
        url: "assets/pdf/Tao_Wan_CV.pdf",
        icon: "cv"
      },
      {
        label: "GitHub",
        url: "https://github.com/Tao0v0",
        icon: "github"
      },
      {
        label: "Scholar",
        url: "https://scholar.google.com/citations?user=g3tyqHgAAAAJ&hl=en",
        icon: "scholar"
      }
    ],

    bio: [
      "I am a Ph.D. student at [Southern University of Science and Technology (SUSTech)](https://www.sustech.edu.cn/en/), Shenzhen, China, under the supervision of [Prof. Zhongrui Wang](https://scholar.google.com/citations?user=Ofl3nUsAAAAJ&hl=en) and [Prof. Xiaojuan Qi](https://scholar.google.com/citations?user=bGn0uacAAAAJ&hl=en&oi=ao). Before joining SUSTech, I received my M.Sc. degree in Electrical and Electronic Engineering from [The University of Hong Kong (HKU)](https://www.hku.hk/) and my B.Eng. degree in Information and Communication Engineering from [UESTC](https://en.uestc.edu.cn/).",
      "My research focuses on **efficient visual perception for dynamic and resource-constrained systems**, with an emphasis on high-rate multimodal perception and deployment-oriented model optimization. On the perception side, I study how complementary sensing modalities, particularly RGB and event cameras, can enable accurate and temporally responsive scene understanding beyond the frame-rate limitations of conventional vision.",
      "In parallel, I am interested in **efficient deep learning and edge AI**, including quantization-aware training, model compression, hardware-aware optimization, and deployment on resource-constrained embedded and accelerator platforms. More broadly, my research spans multimodal perception, efficient inference, and hardware-software co-design for autonomous and embodied systems."
    ]
  },

  publicationsHeader: {
    title: "Selected Publications",
    note: "Selected research",
    fullListLabel: "Full Publications →",
    fullListUrl: "https://scholar.google.com/citations?user=g3tyqHgAAAAJ&hl=en"
  },

  publications: [
    {
      title: "LiFR v2: Completion-Augmented Event Propagation for High-Rate Dense Prediction",
      authors: "**Tao Wan***, **Xiaoshan Wu***, Yifei Yu, Bo Wang, Xiaoyang Lyu, Muxin Liu, Aoxuan Pan, Zhongrui Wang, Xiaojuan Qi (* co-first authors)",
      venue: "arXiv, 2026",
      image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABMNDhEODBMRDxEVFBMXHTAfHRoaHToqLCMwRT1JR0Q9Q0FMVm1dTFFoUkFDX4JgaHF1e3x7SlyGkIV3j214e3b/2wBDARQVFR0ZHTgfHzh2T0NPdnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnZ2dnb/wgARCABxAWgDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAMBAgQFBv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAHtEebPSnnLHoTzoeiOCHeOJpOkcyI6hz5N5zLnQOZnO2ckrrHmYPT1x5N8uuczRN6y1c0K8+zpGXZLUsFQoXKSWKhYqFiwVLBHmPT+ZWzEOBTKlmRoEOqgfKmw2torM1hCFqWbVZpCLC9rJrR283Wzc6efZ7OP0q5Wp2mTQ3i9Cb2gFEOyy1dh3TpNIm5vZc3OoBIINYnh9ziZ3SbyRaJL2UQ2kVJh7FXn3pRNGrMt7Y4dZAWiA7aXZe/nQ9ruXo5nVc5Odg6HPty93n9gaBFK2qASKvMFStjQAVLFzHD7nBmrlZJIJbEy1JLUUiprLJqWMskjRlZMueuwMMbqmzLv075VvUx0sVDKaq2sKElygs0sFSQiCxQuDBYMFhfg97ilHLbDE3o1etFTbbJtSiaa5Mit9S0QqXVVZmsASpaDp68fMz175ym75dApGaxULsfbBtlsVCxUJIBIqF2kCTAAAW5nT4lloXMpeLk1JmkUeuytbV1mKMCl6zvNqMipZSYkSanY5vQxef2dmMad+TWzh9Ux4Xb6dr50430iIsmq7qcbfi1MPcREnVM2mUgAADgd/gEtTeVtIoWumR4lkC3QqF7Irnq6GGy11RqNXIQxcXPe5+3Ly9aHaZ15sPVXtsyYulx4Vsy9TV2FzLG9lprLl6XNkwk33elpz6JMOkfNIHlyefBJkAgAkCLADwzRIJoyhOuO4UkDpxGhXbxBy9DeiGvO0BU8UFf2Q0iAzKNCU5oVl1BL0oC5FBNOAuf/xAArEAACAQMEAQUAAQQDAAAAAAAAAQIDERIEECEiMRMgMjNBIzA0QkMUJED/2gAIAQEAAQUC/wDPkjJGSMkZIyRkjJGSMkZIyRkjJGSMkZIyRkjJGSMkPxky7vdl2ZCeyZw4pXV1lbmxIsOyF8V8v8MmObtpX/CVsnUo55FxysT1fOnytu3Yuy7Lsuy7Lsu/Y/HtW8ZWUZ2L98iVTFSrmbylPiMuch1HY5NJzR29VRJVGz1MNNOdSs6FLtSIu62ltGp2eV+2XcTZ+7PhPx7P2EbvCN507LGZCJghQR6cT0Ynpos9ntcuaT6bLGdbKTaiTvJ2/wCpGkXjTKlXjSfRtMmm4+lK3OPY7C4F52l8X4F5UecSxHhtRY+dv3F5JWTrJOpUwaqoxVsIliUN9J9PGODzVNIqytOH0VpYq5Pzo/o2ltbafjb92l8X4/oNtFkyx0HQpyHpkf8AFZKhOMbly5kZGk+k/VSbI0oR21auvBGg6pSp+nDaXtfufj3+SUOl/Rhm5suZM9RkZ5TxMUYxMBwNIrUf1RivZqIuZToRj7XyWLFizLGJjzu/HtxODgyxi+7SS9tJ/wAmTMjKJaDPTNOrQsiyLI4Op1OuXU6nU6nU6nQ6ClBnQ6HQvAvAvAfjaMB4xJ9hKUSTiO907GESx2Rls3ZUfjwWOd9N9fukiPKsWRZFkWRZGKJLEaknijGJjExiYRH4WKI/LFoUmNq92z9k+7Q1texmxxHY9Tqpb320/wBWUm60mp0nlLCJjEtEnKnTVKfqzwiYRMImETCJhEwiVatKkaeXqxwiYRMImETCI/FlJSp2ebt5Iq51Re5IyLlvZwW2WzdjJGn+q3GEW74xlWIPpV1pCMpSpRtJPneJOagq+oqSFTNLxH2vxnbazZZl2eTHbEs/atrC28ljTfTbpOvz5KlRlH+0ULunTs3VxelqOpI8EaimkzUvpThlJQUR1bGnd6fsfjaN8exLyZHktsryWJZjLmRkXdsjJmZpvpt1a/lwcieMZUudM0qcZTbJs0REmulKDjFRJwKs/TM3tp3alcVZyqcnN342TsZMv7Mi5Y5OrJ03jYtwXsXRZGLNH/b/AOH7ZyFpbyUUo11/CkSjkaSlKmtlztKORqkkKIinTahaxGlGMtn4X9J/CPxNP8qnzfzl8d4Gm+n/AFy+VL4bVvrfjTfbt+UvhtqvlLxpNmfv+4//xAAiEQABAwQCAwEBAAAAAAAAAAABABARAgMSITAxIEFRBED/2gAIAQMBAT8B47lzFS+/4746eUTJevEdN7ao8l89PjwES4QpREedy3k21tbW1tbW1tQVBcKgZFXRipUrSh7dvNSG15yp8IHpGlR4EqV+cvKqPx5hA/eCVLELFtKxp8V0xMlaKxRRI9cNC+sVYcI9tV2qUOiwb//EACARAAEEAgIDAQAAAAAAAAAAAAEAAhARITAgMQMSQUD/2gAIAQIBAT8B1tb7Kor8njkn4O0BQkcGjZ4pGBWgHY13rN7DhNzFI44E0q3WgV3AgAL0CeJNNTbrMgCrKu8DRUWrQcu1kJ8txwqyr+aSgjI7T+5CdwHXD//EAC0QAAEDAgMHBAIDAQAAAAAAAAABITEQEQIgQRIiMlFhcZEwQEKBA6GxwdHh/9oACAEBAAY/AvbyhJJJJJJJJJJJJJJJJJJJJNJUlSVJUlaSprW2ZDEXJXySvmqo58tnrV2Lfj3uou2t1X3Ni96XGLFhDEWs1V715qTZBMWFLm8tMWbosG6dKP6mo1N4ki5w/s4P2cNvvOvc6ipyHUuYEp1GUTJZBP8ATqcROVarlkaljUchfJayxzI/ZJNP+1XvTF3paxguwlmRap6q+kqrHIRTeWxJqhxr4GxoXZbZl715F7Pzphpe3k2U9uv9CKv0g9ZJPpThOGkki96Nkw7I7rm0NDQ0NDQ09JxnNUMStdC6uNlXsaHCP/BpRe9NDQ0NDQsxoaGhoaGhoaE4TQ0PifE+J8cjkCFtBpNlVgd05EsNj8kZMWJeVJyfefdkdKQQQQQQhu4EOFFQhCEIQ4UOFKPdSxuqbwyD0VcjDuSlifImHCPkgXuOqiojGytl6kEEF8Vhdy2HqQQQQQQQc15ILiXCiOQQQQQKJc4snNfYKXL2S5vWQ3TaxFvxJ9qXVy3QtkUupusnQcXPutWC1G9de4hsoxdRoPouXUVUMa4lpcaidx4N4XZZC/oNkejeFpGdci9xFsY+46sWpcemOi9h0ohbCO+S2nqO5/SnIdybH+ZYJovcQUZza/It+hsoyGKjC7Wtb1w0ZLqPNFxSvslzr3EolVFypXBTFkXtT//EACkQAAIBAwQCAgICAwEAAAAAAAABESExYUFRcZEQgSChsfHB8DBA0eH/2gAIAQEAAT8h/wBdpcNHswuzC7MLswuzC7MLswuzC7MLswuzC7MLswuzC7MLswuzC7MLswuzC7MLsv8ABIl+YV13H7Aav+gn/wDQfFZfslz/ACEd5exVKFLmbiTTczBGBARU5IEWXOxXVcvJ0o1JjgkjYLEBzm5mdS7qXmqlEIip2fHCvBFmluKo5atYaU9ia/B0IOLo4uji6OLo4Ojg6Kyt8L/ArDda3IGpXhyMkLdknXUayoiSqkvJeqo3yi1CayN0TiBjRtGU3Qoebgdb3CHNiKFGR209wr+Gg1NbQX14BOZOhKpFtohDhoqtlVW565x5tQ29xrSYtDiILHYUbwON0pE0c+Wkexf4ElCuNMlNKJMDTq0KG00r0LSZXIBzeCtKVsiG6oP60UMVNx3ow63FSzmRVSuUoNhT6KJ2Gl2LK3ZfoT2Hl2RQMNbtwwmn0DRidbDbeDncSLV9iGJ1c0RXJu/NiHe6ymUoFZdyJS6DTGhGpY58/QL/AAKI0KkQippQhshYLohU2GCbqWCKK6PENxXgwii5SHmtGhwQIOTKMtVlK3F8quC7cPYh2jmBEtsaFjmEwVrsS0rsM5ar2xkCVLTUWx9hlU1A5WoNYj7T81RyR4QJEzSSBWc+foF/gVkU8SSSSWqMGk6IhYUdvFGiSqhRcnsfN3tmN294f8xTQ+UCaMuoSmSc3GzJQV8wV0N1LNkK60j2CvcGk7nsTKBxaW4Qpkx508/GEEiuufNy/wACdET8J8JNONR7qTSgSVXK5BOW0snwStQhMhbweiUVRj1GXo5eyLsG7OhyDvIiIO5aSnclEolCdIXq9irv+IlEolEotQ0S3EtxLcZA3eonuE6RyJRKJRf4FZfB0IJqcFLohyJtTuqhohbwKUhVLtnktr47HR/wLN+jPo5HuFyNKy1z2RYNl0jCMIjaI2CAneYmPkP8nO4zuM1DIcE7jO4zu+hk+hk+hk+hf4FZCraox7UbkMo5pNhQpJ56FAlq1GVpUoILgmKrakTbp0Rcx3gQisuBJlCeSZeyKkG2ckbmjBGU7jc3SfKKaKOHBW1W8vhBCIWw66L+WChak9UQ2RgdGJ0YnRidGN0fpC7cUuUkID3xJH6Y/VH6o/UH6Ev8FF/AGVFwnsNmZBhWJZLJDYqkm+1SiHNbkFzYGouJrkGAmUVKZJK2k6WyD0EledWbAihDViWteSVr0Hhq3DmpTyQNosFFFxYjAGu6GyhSqWlbi4SrVHczAMAwDAMAwDAKc0hFW6CSMAwDAMAwD6wsIXKm4R2Wi7ZLaW5GtQTAbNUnKJbmRgxrdEtZE5uiGLB0dB2Jvc1Qmmj3f4LclwOQO3NCT6gaKe2Tzt5Y5z/YbCBOztIhW0XC68yxp9iu30Uir9ivNeBIdq/CdvF/gUFAbbc3FYKTMEqohNaWJndOBrRl9Rqz4klO6GlNHBJZJMhI8OW8fvh1dCrhZDmp9skNP/0WZ3lNKrIvSFRt0g2YEE7DaRtoODn7FJCnAISATy0DUSu11IOqrdxuC9/EF/gSovFRrkaZJypvBu7Ei2JJ01w7l0UMHS6aYstxwPbQaNCcN6IRT7iLnDmxKyJNR5j3E8heSaJXYV9tNFYZKiiuUmUxhhbQvr0jedWSswThyNaVdsJaibrckrUlg9yOoZeuwmNzbMbrUgppVkWMc0tOTRT7JaCgv8CdF4YlGZRs3L8T4TxFDZiR2aCHMbS1IRYlyTFJW9Q4Ooq++hD2ZQheyS4mtDkexPBqNxXWig0lS11FYJfgRMMBDnAhSiIL0Ja+g0UiiEaskZKkcrwiEt02GyxCh2GN0UCqUppVQqqKEYUGAqueCJISL/BZ/isl4dy6fZ+cPtj8iLnL+C/A/J9gseNWL8fgvzC//dfNo5NfAvo/nx//2gAMAwEAAgADAAAAEPMONOM8+tsNesPs9vt+88/vlTk6ec4Qm+5lr3c1PGlnVPP0Lfb4zi0e0zwgACKvIWOSfPgFenDbJW/4ZcTg4DQEfffTABG2EQvtRPAYXtBncggs5g081Uvev63vtAzqD2yvOUIiscAEKp3hTUPznPfMHICTThVmevAPffYfIQof4g4vAvPX/wCOB7z/xAAhEQADAAICAgMBAQAAAAAAAAAAAREhMRBRIGFBcYHBkf/aAAgBAwEBPxDxhPHBi2JrDJXwyR9kfZH2R9mTIuF5QhCjj2OvI1MiW+jILXCVaTEYnLKl0PPBiePKc0pSD/QngauxI3WNZ8LiC345KUXEvKIQwcyCTIOhOhOhOhOpOpOp6T08tHWZ9/AhqlsXZH1E2K5bWZDJDHZexjsq7Kuy+z9L7Psz7MQs6GmkNu3+jHkbLh4KOiYnMD9z+jeajWWNbBDaEGmsMeAZvBDXD4RhFFGj6mGI+Bt0PGBph4c9f0Wh5JbxoaDHsb2JMvyJLdsimLA35LjcWuGhp+r+nXG5s42G3GR8vrj/xAAeEQADAAMBAQEBAQAAAAAAAAAAAREQITEgQVGBsf/aAAgBAgEBPxDzSlLne2NUqaFRo0aNGjRo1hYa9Uo8TEkhRuCEntGgeWb74Q+4vl02VlKJUx9HyHIHye4Zbg2J0SmINlNG9oqNHERUVGioqKioqy0NAv0NKxE/ojF8JvLiPMJiEJmmnSJUJ+CVbJC5jGDgl+muITa2Js6zRCNH++Xhqjb5hMJypOqJls6PpYK0r6PmFpDbZw0WCvvtHTxXVm6Hx46OsLgun++Hj//EACkQAQACAQMCBgMBAQEBAAAAAAEAESExQVFhcRCBkaGx8cHR8CDhMED/2gAIAQEAAT8Q/wDnsTOEHia31afVp9Wn1bwt9Wn1afVp9Wn1afVp9Wn1afVp9Wn1afVp9Wn1ae5fEawOm/8AcLRG2uG962Wi+plnPq/3FeoXhecHFoTLBeRTNe1StWxjWh0KX0iBNgqvF8x0LZ3Z0/eCqWYjSx431Y9PFAC6xt90Lbcr+JRBuqAtRjMoiu7amYG/HL9xzAt1dv3HSVMt26EttVq2sYV0KytDaYACtcum/gm0Kz+Zj46+nUHdlrSNFR7cyshthQYwf4IwWtZnV/rvOr/XedX+u86v9d51/wCu86/9d4ZCwoaf49y+JRB0lYAgC5cVsrWaAiaSqUdpcUwGMusuCwbrXaGKtZU7y4OFlM/2IhBYBHlUushV7xgvjqjfMvdOyO8HA3KLtdvL5mutY+Q5iX0BQBzL8is10jgqrDmXG2gp5Yo0rza8QxadLyJod4oFrRKsbiVoPOPEuLD3iBCYK0NrmWYi4GPKhDVobWtpQbVfiWDY2WG7rfxdJ1/DBZwJf22pvZWve5bajzVrn/kNinMl7/8AIgsrukahQKBvO8SicPnxxvdFqe5fEZgDXEWtDDCCgKeahpZac4l4DlCwYOheJejjYWfqWlBu1rAAU1FiBhHWK0hcilKcapVNloLSqriIcwNACdS5RWumwbHnM5zcku/WaoiyURf5i5Q2rHNMKbAtstpKOBQK13gWaL0cQjt/jIUi8i/Nik6BDBh43gwBZYNXyhkAuG2gJWBYQx5ytpRwEHjYV+yJYFW6XnzGqVre+fj778MqBMDbWN4qUK1vqrTHSMinBUcXUQ4ANFkArX1Ma/qBFNjCzHtvnx9/+J7l8R6AhDXO3aVYYvFDCMJoYXRhufJBIMgkFGkSgINi2mZNa8VWkripRplajvK2KodC3pFBzEopLrp0mhjv+4grZm7LLTSLA1zUL9IoV21sBBlb2BafiPdILgt3uYLhs2HPSZAveplQfaUQb/UTBhbmjOvb8y5FRd71fErsvpcAdQioLBbchpNYb2RHReI42LywsJAzmfx+fE4f5hnaTlRLdI1KqG3tUCiqca8ylvWAKTZ8+PufxPcviEzOxChRLOkKaeI9UFrbOpKQFoUVu3KR0MlWJgJujeXyjFUnykhFsV409yK2Ciipx5MLY44gJpujnoN6ghqz3lSC3G0q7RbWjiV0AsNWO1/VE91EqCKsOXO7CtDe5fKdJolv/JQUGmyyVPFDZekTPq7KfBt5ynk2uk9TmJ8CW3l8dH9aMLmOWALVsQ5ZkluYM10I7r4fPigESxwk9y+J6EeAZcuEKzOxDC+h0ZlUrKFl95RuhM4utUdiC83k+JaCHFnaaMHnB8u5KplavMiYOs4Y5ETovxHmHeA4qPkwZY3mitDsuxLVFBpHaIqBZdz5zqHrOoes6h6y0MiUaBUpDa+dHlAChKnUPWdQ9Z1D1hpkBvLPtJ9oz7Vn2LAvzTh9ZjAqEUGdQ9Z1D1nUPWe5fEfpEGEpiwXTeIISl4zARomrlEALLmxChpRVq35jYqVeUsCi+t3Lly5vKqyy14jdeZf7Qs0ncv0icDv0dRHolyjinZTOq09exELW8oT6on0xPrCfQE6HpJlWp2l1dXK4+2f1ifxiXy9kvn7Z1fbPuSfckCzQWTDPuSfck+6j7aPto+2j3L4h9Imeip4iljoDmLRZ2Uv3YfgalqjQ2ZejvENolUaCKYTasYgjokewxtXyvkKg/bCmZBxyJYpE6kF0D2ZQeqMSOAtDGSARRx3BcRV+ZU+8obKnSfBsYV1e+hWXK5duh4USjiU4PSdA9J0HpNnSlwYDbaoFZZdGk+m8IfQp9Kn16fVp9EijNwTa4qZxg0F06bbT6zPo8+rz63PpM96+IRyOLApp6wQW/TBzHqB0aZijk4e0DbuEx6S9foSyFYpmtJYPs0BV28RHi28zJquHhW+kYyro1BKOaAv1gZiveRYdtbicFxZp9JVS32iut5TDVTyaQxZPWWMk7R4XYucJ5kgAWhKexLzCW5TCNVVloOvnKkMuqG+u3hQNhOWW6rrp8ykb+o9hvDxibjxtsV/4FVUVEIiWmZ8+IaEKJoV7/wCqqqL3j4mdjhg5hgUjGPhEBrmuRYsKXLKEbeXQl7gL0I6UdA0Jkgu+Ja5VmzG+jzItzZ3iBSHUgPDBPQZUzllXQQGYj0lZRyO8pZHpMKg3xNwruSmUJ+JBmrk1Zl082Cwgpc40TXt/xpCoCllNAmNA0Sz5ft6RGcEMlXTtORLb1stgWayvueChqxRAKOsyxoUOs0vFoBasDH0lavd/UZsNtm/eOoaNHkf4c6yfabit5nuXxGEAUZ3ihKndhNoDiBn4ICWgcYSLzRNzDMBd3WpNUEYHUKNKmiFOk0acMuaPrHRPcxEi3oYMFmW0HpKPVLTxXgU+k6EYaJK/SQKJay3V15v2qOOsUq2/8iRSu6TClpKPM9oEyLy35y4t70Oi1nboTAcqzpfTmXuKoXYzM2suu0cnAtXYm/GTk/8AIyA01rtAbV+rEOmWfSBy8L1exNDAWuB7TMi1St1lCZ6HE2w9toURW257l8S5uhHpCkRS9O5WkChWFTppGuw0s61MdNeZoAE0bp9YBJ5r7GNyimzT5MIEEbczMuuraw82VwzXbHJmGlOSU7pC6WIrrUUBQDU7wTtPeU1p3R5ZTtCcrPwkAoQRpW+USwLh+cUEkowUlURmKYb1zKUGzK82VyKIcclaYgjBfABtMGDn7wq42ssVSDvUakxQei+spIoNUMAlLW+0YoybWfREzQJdYyNSbShHDE43mCCXZChYoKpppmLe2jQYKRsanE9y+JoXB4NBAnWy5FsvMOBLzKQg/wCLhFVP4piFXezej2YP3W/uWMnBmepEtm50ntMJorWrGVIDlY6Qdou7S5MLqvxOtuSO73EC4OVCh2Hd7E3y20EaM96jWDLtwLvjeVg3WKIDpAowAcMAhEowVBM0oZ31IoBu7lesALLMIyvbmUDGY1xevrCDsMwqDaJp4UAAryq8QmEcG7SWak33xLD6ym894TaFUu6heAETJABswpuboJkpx0NYaQDtPcviaHYh4EdoaHhvDw+FPjTUntfBNbt/hdPB/R4I/wBnSf0Of8D3fweB+0fA+KacfL+fH+jtPnxq7CGk+JD2E/tcvD//2Q==",
      imageAlt: "LiFR v2: high-rate dense prediction with RGB and events",
      fallbackTitle: "LiFR v2",
      fallbackSubtitle: "High-Rate Dense Prediction",
      description: "A propagation-completion-memory framework for causal anytime and streaming dense prediction from a single RGB keyframe and event observations, supporting semantic segmentation, monocular depth estimation, and multi-task prediction.",
      links: [
        {
          label: "Paper",
          url: "https://arxiv.org/abs/2609.25803"
        },
        {
          label: "Code",
          url: "https://github.com/TaoWan0610/LiFR-v2"
        }
      ]
    },
    {
      title: "Topology optimization of random memristors for input-aware dynamic SNN",
      authors: "Bo Wang, Xinyuan Zhang, Shaocong Wang, Ning Lin, Yi Li, Yifei Yu, Yue Zhang, Jichang Yang, Xiaoshan Wu, Yangu He, Songqi Wang, **Tao Wan**, Rui Chen, Guoqi Li, Yue Deng, Xiaojuan Qi, Zhongrui Wang, Dashan Shang",
      venue: "Science Advances, 2025",
      image: "assets/img/prime.jpg",
      imageAlt: "Topology optimization of random memristors for input-aware dynamic SNN",
      fallbackTitle: "PRIME",
      fallbackSubtitle: "Dynamic Memristive SNN",
      description: "Topology optimization and input-aware dynamic inference for memristive spiking neural networks, enabling adaptive computation and energy-efficient neuromorphic processing.",
      links: [
        {
          label: "Paper",
          url: "https://www.science.org/doi/10.1126/sciadv.ads5340"
        },
        {
          label: "Code",
          url: "https://github.com/bo-wang-up/PRIME"
        }
      ]
    }
  ],

  footer: {
    left: "© 2026 Tao Wan",
    right: "Built with HTML & CSS · Hosted on GitHub Pages"
  }
};
