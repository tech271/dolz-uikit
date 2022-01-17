import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 128" {...props}>
      <image
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAG5lWElmTU0AKgAAAAgAAwESAAMAAAABAAEAAAExAAIAAAASAAAAModpAAQAAAABAAAARAAAAABSZXNpemUgTWFzdGVyIDEuMwAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAgKADAAQAAAABAAAAgAAAAAD5j1/uAAACd2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xMjg8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTI4PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5SZXNpemUgTWFzdGVyIDEuMzwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KCz/sBQAAJNJJREFUeAHtnQuYZUV172t397yYpnsGGIItIQqKxqCCQVE0FwzxQiRevKgEDUQQAUWuIiDjA7UTGEMQjBLxgUrQT/SKICgwLyEg8tAQE5VgNIoBFOQ97xlmprt3/r86tXbX3mefM+fVp3u6Z32ndtVateq11qpVtR9n78RNaUiTpf1ut3SW26MvdfukY+5FPc4dOJa456vbQwrzQ/dTxat0+E2auP8Q392K701T98CmXvfYMauSNYFvR1SQQFLAJxUddmnPqwbds7Y495JZzr1s1LkDpPC91clFY87t3KveoWmC8BxAs8FI8U5l9XOrxfeo8F8kPe5HW537Yd+Iu+eoDcmjucIzGDGZTZoIUPpBC91+PWPucHXmcHWEWb6oT8hYRZGZ0lFyGUDPghIxHwNUfd46No85bONBeZAfimnpWJ+7Rd7hQbJnKkyaAVy7IF0wL3Vv0qw+Rkp5uWZ8P4obUSjO7nrKoUwWSMR4IQ0jA8aT4B7U1u9EWqEl48pkg7vtGJfI+cwsmBQDWLogPURr+qdmJe7FTMlmlR6rCJ1nQYksHdNJhzzKmoGZMWxJPekueZwvbJrnvnXSE8k6+GYCdN0AbhpM/0y6uFqzcLDd6ZZTdlBwTEOBHi/Jy/EJ6RMvhiFj/LEM4ZLHN7j/f6ZLNlHHdIauGsDK3dKhZKu7Tcrfp5PKR8uxQqvSJfko1fMV8lgeoGuJuGNszC1568ZkGbzTFfz+qFuDS0fcybOT9pVf7K9XpIhlsScWCxhvQfmU15mCX5JkCK9MEnf9l+enX/tKf7pfSRXTgtQ1D3DVnum8wXXuTrna/RFyO5BTdKRE6qyVl6MbH0RLF+OQp82pk7daNZq6z/T0uE+9bX3yOGWmC3TNAFYOpM/VFvwHEtwutglrRYhBL+OKFgFaaSjk0V7GV8jL6PCEPPjpK26SpUGG8F/KuuChDe7K4WlyxtC1JWCsx+3UkzgmVNuQKSsoKsNVM2kPWcII9ZU/zjWesio4ZdysIGHt25O6y4fmueWf709fPc65/aa6ZwCpW6/ddVt7v5yihZiCiuLP8SmziBf5wTMeJbJ0oBs/p6uE3sS9Wq5h+ed2Si//9M7pvpa/PcZdWwKWunRO76C7TXuAl7W6B8gppkRRWX7IQyEZzdL1yoUCVWVKysLKqaMsmj3Bp5JZ7jOnrUlWQd+eoGse4LUuwYterdnTEuSUUqLErFIYA+TKiFbEjS+LS+rNypCIABR3puEskiGcP7rZ3XbJvPTNw7q0HbFN+WRXO7tlzP2Trrr9x5wmxZIpQeXYoBXBbCrHB28IGX+hrOX7WIcYz8pEiTjf0n5/IET7m/3Uj68tmOtuuHheenBUbEonTXZd6+SKgfQgNXrtrB73jM1IsQFohM0UgoGwc0cxOnXzsT/rUDrjUV6cpgu284/pWVqJLA2zIMOjPOicLWiJ2yTyP2l8H//A08n90KcqdN0AEMTKBen+ij7Zm7pDECQbq4kA6kb5W5WQ53EjCuDQAWIfdMjSRgsxGbXyPL0kH6GyP5ABPCzDunhss/vCYjc17y9MigFINo5NYTLojtMatHi2c89lY+hnKpkdBgaJsjAEvA7BjC6e+TQLXy4IyeFRPhnW5yoeEVhfaVtt/UiXlc9fvCW5TuiUgkkzAJPCiv5096TXvUf4abo7uICZijAnAswQWB42SnP4aZYJgKgqiBCya+ZVlQn1UMCMg2XBG1zqvqWxLjlnY/JvIk0JmHQDMCmsWJjul4y5D0lux+hqUU9bFwys0joxA8cjrAuGYIqkiE/rYLTSOOTDb4rO+EJehsMkYFlQmzR52dZe94nhjcnDPmMSD1PGAEwGumT8Wt2EOVez5hUI1ly15XcyNo/wtDS1Vo2xNKA0IF4aTJGeXiPPeIrlKBMbCA14Q3DuftEvfGqzu+IfJvG285QzAAR2lUvnDQy4t+nU6n1aFv6AmWpCJL/TgBCof70OGALtGWSKFSFLK5GlIzpleIwNKMuPjcPOv7Uc3SHe8z66OVlRKdnd45Q0ABPBzbumzxzZ6s6SRziZR8ZYFoJ8jaWjMcJA+RgBfpq9ApBTZuhAjmY8IpbSyQ95xfrYH6idURnON9Tkx87bktwLT7dgShuACWHFYPrHkuyHZQhHhfNsy+p4bAJhWXhKmtkYKy6kFVUrOsqjU1Kmh4w3ys9o4iDNIewPVum04dPaAF2iu41P+Aom+GDjneBmOlP9sgXp0bp2cK6EdQCz02ZoZ2rP14JgUA7LwpMK7A8ghMgzk84UHeUZTxYX8ihclkebLA3a9/xCZyd/N2erv+08kdsgf5pKf7Yb+PZu6c5zt7pTk9S9V1cTh7qxP8DQVuvwlLRNe2YcZUo0GgJt1TgwAupRk8u1dJx7wdbkR9Q3EbBdeYBYAFoWnq3OnyPaCfIIcyf6tBGlsCw8Ka3wb5NMuXRK9Bg3I/CxDjm8wu5pHGrmiU/eDm+wVvuDj60ecZ+4zOmJyg7DdmsAJoeVC9NX6vrBucKPQEkdl5A1pNiEtV6KeVyaIWZzBxBVBfIDvZQnyjc+iylIGmBco4m7UX93e8/HNyf3eWKHDjamDlU3OdXotLF34YD7S92I/dCs1L2ARVMTdcIAoTHj8QSPqTE8g0HOEwQlkl0VojzK5vKjPKOHawcPyBuc8g8jyUprr914WhiACWH5QLqLZsu7NFX/n64fLJrIy8q0ifDwOHiDJ2RxpKF5pZUoETpgp4Sm3Ko4lPW88IfgPUHqNsn63vuJseTz5LcL08oATBjLdk6fp4tIH9Bp41s0c2a1uz9AAUUwmgmQ+wqPyBD8/sAyVYhkVRChihYaqGscKpQZmHN/88mRZDgUazmy/tes4Kad011l3M/r7XW7647WlrTXPXj/KveLUydgQ1KzEy1mLBtMD9N1gw8rHILAWRpqAflFaIgmJvhMkGu0BjwqgXH6aOWJsxCIGV7IK6PTL0/XgRigPY3n4n8cce8TZmSf18zB+l1VZml/ukhK5y7dsXI9vy/G2b4T7H1S9++aYZ++Y427ethpCzaFQfuD2YOD7nj1f7G8QdVt5zLJVdFEqKJpzGU0BMr+g7MFDMFfPwjyqTu7qS9USFQVRIhpVMmSoGXn4ktHkrPBW4FSA7hRD2xI21/Wv3hexHkvAzKgABsSaMpaqocsznvt2oTn/ac0cNt5rNedof6/U/1fUHVZOQi4OAiEXoRGaMgJ5T8mQWEM3vuENihvdVi6FeOgX7Sj6j8qI/hb8GaB8jn47sJ0L/1d+rtS/r7x7jbHJISCepADC9wkB/SlLT3uoiNXJw8U+aYafuPC9IXJqL/t/CYZQg8bN1NG3NdO0Ey4G+QjfycLYHnAXULPFG9pEWIafcnwQl5GN6YK7ymfGU2+AKkZsD5mZVYOppfPSdyJbGoaAdyQdtxcIXtIL164aO0s98VjHk/WN1J2Mnmu121n9f3DCi9HKbX2B2Vi2CYtMBifKZwNIobA/QWAyCd1sHRVXJIXl8VzhPo36FrBUZ8fSW4mv1HIGcBN/ekL5CbvUuEBhNIMcJOGoPH9q3p03v9enXynmfKTwctt57kD7h2S/lky4mcWlwWUEUMOD0iOFpjLaGQhbAztcflslgaWCLZv8JcFkeufMkZlmYjS2a+1Hhz2Odf4g6g5A/juYHqy3OJlPMDfKvDfL42NAV2j07DzZQg/brWubpW7ZkH6B31j7n26yPI2GcK8bFlAK4IQVZBwLNKKeK1y0BE6y+sjEtSTsgjkBY06ckFIDo/zyYhxpcMEvG7VqHvjN50WugYAwxkHXUXLWcR4TsMpE572B29Q77+nJeXvb5mf7tFwBZPA+AbtXY5am5wumR6mpUzPq1auw+MFCbESirQibry1ykFHM9pjub00256tGTNPaWhW1sc6xLiyqyDOJ413UVWvH+hxp1cx1yDkDECd24cOtgt0JniRAQ30nC197k7dvDnlFpfObbfuiSx/9Lrkrp+sc6/TH1mPlSHfgzdjQiATCyb0Ig7daMRVfCL4nb5ieZrKfxYUD0oDz9Fs2VXT18qpeBWINaszPmOIGY1HtA+f5Bp7pwHj88D/9wfWuds16JcwizsJMvSKIFN3uyx9yRFrk+WdrH8i6rpqYTqoU5zTtYy9W/3fHZmgIASGoIvgaVFGlMxYa9GsTpaEhzWNMRCAKA4ZTcSYnksL8UtB6q65PE3eSJl6kBkA58k9lQ3g3rijiQBOGzU++nvhnWvcB4en+EUkZHCl3mugF1q9X7PuOL26bjbXRQyipJH84DJEiUZ4jB9lsEH8jazNdED5XBCSw6M2qjxD4o6+fDS51uovi8eXgF7/1k1782YZb9u0cE0+kSEsfsWgW9J2hV2o4K/WJr/8y3XJSRL64XpK558RGMHctSkDPKYVcfjq0chD6btp+u4lN4wxxPX5dnQgLgOfrwyLg1dZfIpLdyrjN1pmAFtHHevznFoNWIF2YwaFIaiDZ3Otvt36ulX+zeuTW1evd0fIPZ8oRf1XcX9ggieuUlwJDR5cve0LiMH5+9pCaWVP1k2B0CqAVhVEiHm9B0ndQVt63TFVFUSEzAD6+vyFPcY14cDgdbrVp8bfOeGNdbABboC9eUNyhaz3lTLiJRLyKgSG4L1CQ2zKMSXHiiad4YWyVg7lsSncQ8FosXs3mtgqACGA5RlJV3VPe10dL5AZgFpSc05vQOkOYOlq/OXLd0uf0Z0WO9fKW9YlTxy3PjlXivoTLddfl3JGeXzLZnMjSkbOZjSkLRgNI/g9eQHOEqivDKxMMTZe6lDeSwed+3OjFeNxAyjmTDAeBrqbnnIbmuCmJqz6E9Yn9x6/PnmLxvIX2h/ciTDD2lul0FhJpuR6NHjIf6aMQJfmS5cV8j0TcQRxvfRHZzInRNm55KQZQOhFrwTXlWUnN+oOIyduSJav2ej+VNfi3yXF3R+W7yqlNaJ42wtYzJkTSwHgFV5JZsdY2cU0BYIXOPQtzv8lPytniUk1APVvTKdWXMDa7uHdegXOieuTz8hdsz/4hOL1GAJKKSrelgji4rJhM9/KIZxBGYCu7lUZlC8b2lCUB+oWhaCi/Tq8Ps9QwSbVAOSebAxlfdsuaSfpH79v35CcpZl3iPY51zFANlY5pWtkppyicUAv0hDE7jICHAH5HrLEOGp1FmNvVKk78k26+RVKZ9GkGgC9kIWzTE07OFXvAHj7xuT/SvHHaowPmjcw5RSVDL0WDTc+T5oq9QLKszqJPWSJCkq9gv201r6wkhw/TroBjHdleqbesSn5hu7L/enWxH0PI6ilZOixIjM+EW2Z2EUuAIXVc5uWV6xL5ebKEA9V8RzsMICcOCYGOVV/5nh6lnu99gbLzROYgr3ig5Jzy4QpXl2Cx3sB+cr5CuBArOQ4XcnNH8lX0T/JUysGVaTtwCdAAu9dnazWE9XHaV/wA/YENquJzRhiJRqN2Oh0i2UAiGkVSiBGecZDHIzmhdoH5G7N7/AAmfQmPnH6uuTJrT3uVLnix9n4mJJjRZmyymjw7ySN8T0l8oEiX4xXOCpHf8ahL60pf++YvsMAYml0IX3GhuSnUuT5NBUry4yB2OhFGjgXTeYGAzA+4swiSAfI8pUgrWL655zLfftghwGYtLoYr97kvigv8COEb0o2ZRnuZyyKU8jtDVSGJ4jgzwA+IbUCfMavNp+XlVNihwHE0uhSetglG3UF9HPxPsAUbbTMENSnomLxAPpV0U3JuWGIaPRQz3Pi/B0GEEuji+nNPe5GeYHfoEhTdlCQxy1tsfFwNsAeAMWRl2mXtMD4faxDDq/kD50QPZq3wwC82Lp/+NDG5HdS5h3xTDYlm9IMJzYaMW9cJ3hvUcgjvx6o2C4b9BVW4+m6AdhA/OCEaBbMWNB/Au4sU7LRTFbEJi/2A1hD7rJwQYKeRYfA6mNYwGUAO+kWdvbkF9clJgRoDCjGnmZEzzFzD7p7+J/xBPBiKcimgGbCig0AnnohK1Thm6uy2dPZHTMA6wCNWad9rIPhcR5pgKdtZypsHXO/03rO3+j6meEGsbzKaJrFfhNIHrxV/FUEODOYpbayTzZ0xADMZdETa7tWTDcszycYzQwF/f9gg9Zx/iTkv5uMGDLZRDIpoxmviQ8eH3TI0lEdUVL/7PcriCd1xABoUKc1GVgyi0Miw8VpHc8KzdCE/lCboLGGPYB49YRPZijINAtKWLpRcXbMAGwA7EyBENWM4cEI4jUQ2kyCnjE3Xwbg1+Oc4kx4EkaUHBeNiMibvFoTqbRcpYZR7QGylbdjBlDXA4SuW6cwEqyYEWQ9CTwzKRpJ3JDOBPyO3GTD+OO0ySOmITquBwDQfdAhS/ucmgfdlBz/fF9nDEAtZx4gtEtngFoeoXSUlSIz6fgCdvM2CUxmsQBq0XiquiwvLluWlvFsUXvZH8A7YwBqqSkPIP7gAMr6OGNomhwHM3Fs8sQDL1MuNJv98dLJJCPPQlxPnKas2tqgG0q6FlSBtg3AFGmDoBNAzdgyKmxu1Mw/4DMlGt4pHRoZca9EkbFI4rTJwtNCht4W6kYkbN6BCDSq/Aq3P/IW8jWGt20AVERfbE0y3MfWSRBBQCtICZ5lzIDE5q3udboG8EybyV42BQEVUC8V3iiC/2YJaPYjnExWhd/o5RHsAzx0xgDUGZYA8wbULNRDrThk5wzHaNM9PtulbPze4W/zlgzWZGZZMY6MuXAAjfIm85jHyhVjeAX3VaLKsTMGoLpsCaBa60xVHAhEoTOwzzjo7dPr7p3bP179TFaxMGrRng7CLsuPyxfT8Kvoz2N6xwyAJcCsEQuwzhVjGjca6XjpAJ/ucOas9ACN/4OMO5408bhj+RgdGvLl/QT+5VIho4zXysRx0M3TouU+SdM5A1BPaASwTtWLWcsAPS49Y0Cuf3cN9zKFXW3tjwdv8srRCkT/rUMxNCs2+FXVwzrtvD+uv2MGgDWHRnz9cb9tp0pGTPeMM+TwAZfuOjLLfVUyOrDK9ReEUkAzCSFjXjrZCgTd/EQbwMfj8h0zAFsC0LANoFYcd2AmpM+anT5fbvtLmn0H2ytmTDbx+OvRUCCun9M/0i3CbcVybRtAsKzcjpRGbDClsRHFp3vi0xjS5D297vjRMfd3EvQQMz8auh93EYdYi8YbyM3T+sINHhCxyvG13M4bAH2gw5kHCLjRybQBxfG01rsG/55Z6UH6A8hHlHwtsshOvEEEJosKVjnWoiErZj6nf63ILRjATzcVNoC02rYHoBI6Hp+TGi2O47QNlI6VbYbg3V7hzHnp749ucedo3/M2jW+n4pU+xmXjj8dYRRPBaMStzn7aQM569u+GZfoLO3gMHTEAlF/TA6i1bCCWiHsQ74hi+naW5m1cc2a5U/jSqa7Q7Yni41lfNnQ2x0UoklAeO//41K9Yph5Oebn+dari+jK+jhgAFauR/FlANBJLFmM6J5qRqWa7hNN70/+j29vnyuW/FDnkFF8yuhJSTSEwsZj9rQJP/ar4P1/jkp+W1dERA6B/dimYRmyAFteiiZH+cUd0u4TTZqX766GOczXOo2XMie3wGUw8dhtcM7QwObJvGIO3AuhG7V5Rq+y4ASTy4qnTAyrlna9VgdFpyDppA83FQnJ4peAs/WN2ILshbpVN8fg0/cM26XNnampxSde/Wp+bMwZR0pOKOMRt0cjfJKG2c9rH7FI9P1S8gjbLIDMAvcRgs+ZjSysyU9gMwNY1G2C9mHJqd6isY1ORNqzvDz3a607QmBbL3e/NmE1gNs6430VaEYe3ihYI7NYa/WhH3GYxLQO9VBd/dAJQDpkBSPmbxcy14qaBvyqxETSwZM04ZPB4qi4F/5GVm8rxqX3pax7lC+Z6yQLdb0bxjMtk4ccoJId74viBWW9fFRmnNpdicmn/8APN/qvrlcwMYN6oW/90r9uoATYFDIS/LANsWAxsgHU9gpj0O2jYpX3DLpmSZ4Rvn53+Ye+o+6A6eqzG1medtPHZeIlztIDkaEWeUNh4kD3K78TMDx75gnqzn+YzA3hkgVs/uM6tCpYTutZYpNe++ocTtqhVBmED2lZMJwUvWTNbf1nekr9LVcmavONf69q9Xsz0bln1uzSL/M2b2MB9zzRAG2Pc02ZpJjNO9QjtQliSr77aJd/eVl3sEzwc89uEr389RGeaAfqLAfA2SwREQLE1YxXw1w0U+zOHVH9UHKv/QmNV1zU4VN7o5N70+Dk97nad2n1Efd2V3T19xptZAGecirIA3goNWdm5vpJtAfpTH55Uv4YbqSgzAJhV+Nc5QiM1iIcy/TrgHhFApnyEpICiszjOV5q1VPl/fYab/HcGn9SX/q/nJG6ZNPoVdev5uGMbi5Je0a0qmfJlZTEudvvxWYRYWwZ0oSr/Vuf9ufv+tSrMlgAY9MDhL+hks4DVLQgtIzCAAQO1YsvDMOSynrW5z71XFnSOL9Tlw1tduk9Pj3u/NHS8Zv0cxmD9tq4UcehN06ICyBml257C2mknDsv3dVLFpY3Wg+4yWLYwfVXvmLtF/dJHMhoHKmHtul0nG/EGxuqwGIlZOo4pL3yTDPB1zX73rvFeVnPqjVn9euvWu9T2GRLeHijD+mXcRRx6XVqUGSWtOl+WdvCKZfkZY5MJ5p+M6j7Vedi3XOMf8KRcBrpVcJ+U8XCOmOXWTjAQXluyUFLEpWPdObcvBnBzp8U4CH6ePk79OV1T36d2S53LObE3PWp+r7tVNV6gru3B5Vv6zVgIpGM8RxOS2wtEeI6vUB/jZKIw8+HrFIQJtEHxqc0on/Zzuj5Cb61Qx+7FlTQLdGKIBUUVeOUraUKM40z5gc8MJVxGfc5Ir/u6duB7Ndt+o/zHufQlJyTpNVp6rtWm94/9HqTS7fH+qm9FBbNUZbRobCLnDCY2Ghs3Y2Z8BPg7Ccg9wBna9d9sSKNxzgBCIXa/TQODXaTaeJGhd3HCGbgPGnW2CVS6aCDwUN7fRNENFa3HNxzv0gNF6hgc69Kht/akF/X2uFs1vqPVjcTPRCVQbKxgoZkxkLZgCjW8ET7GRjuU7TSgpqCqj0j5X2yl/ipVL9s5fQVCUp/95+KbqRTP8UtNqbt1PdEsCyEB24wDAxH1yIie0gz96JPOfaHsPjZ1NgIn6IVIqvNE7S/epz49G4VYXygfp8vwVmkIlroxrIlSPjJW3RdK+YvpZytQZQArfi+dnzztvi8lHIB7bAaoDDd300ZpTz2raQRB6iHKlBDj1EVQNbfrcywf1+qy8gqnnjUIfCdngXNHSPFnqR8HU7cpwtqJq2qbFipgzHhQa897l7ihDqRNNmqjLeXTFeqqAn3udYm++PlBHkFqFpi9v5blfD94AQQAWFUNx4ERgZLU/YZ/0Q2Y70iJNyv8Sh5ibfwXJ+3oZ/fr2wpaRvZNe9yfqdBRKnsAA2TWA9Z2Bascm6IVmGOU+xpsgWgPQ/NBDMQxn9C2IFIYbv+8tipT4ai+8aqWDaQv1VMtt6njuM+W4BZ5gfulpbAv9HVYXVVxIFTRo5a53xCuNuKYfivehxU/KQFv0SDI2lX4kOh7ygj1LegWZrx1QGUNiqQYJ42B8h1g/z89EWw/Q565/7iM1dtKHCYD/+xlw9fSml9st9QAhl3aow87LpfQX+M3ZsVS28Dp6CppYJm6yl2t0HFfalseoV7V3HXEoIBixxFyHOApE7ynFTIKKEVrl/W5lfZRPIG++L2FKjLDIzb3X1Z/qKbhCM+qOv9b0clS/s0NF9wGI7qpgmF90lWdv6LVjjN4vnt3oF5+Urb7t1nihSTeRtuxawmUl3PxAXdAAM/qVYXxrt7PxJgmXtq2QPsEw+N+WV4co/SdJTne3B0bt6roOGBcQfnfUfqwTiqfzpYaABn9s931EuhP7FYvtGaAU599VXg/vZCseJGlmXqKvKYIUyqzzEJGUyH4TKFWphbN8ottxTg83PTiO36c6pL27UZMxXrA2wEUL1itcZytP/W/QXue/66QOnesaQCveiJZp2Y+iwW2CgjgZfICz5UhMEvbBeorKtnToCuQLsONTtwsUAYhofRdFLjiCTRaV6N8lVorR9ojaEw3qLlXa9ZffOsEPS9BOzWBq3JyrS17AQbPmn2IvlW1dweNgHptdseKh96KwFWsCqwe7nIu0lTE5SMsa8PyKRiny3BojQC2xaxXfT9TOG4/547SrP9xI2Vb5dnmBF8xkP6VdrhfZX0tDrTRRhEc18Bv0c2iX8kV2OlSo+W7yWdj5J38zHpOLzAyP35l5gyvQXxb/UcJyEh1y9O7S4TzHN9T2yrXiXzargtXubR3waC7Xmven7fztAoDZKN2l4zgHm0KbNB1G+9yJspng8etbTZ4rPH1FM5yRJmMJ8ajdL1hhA0eorlSRS7Qffyf1+PvdN42DYAGbxxMD5QHv1nMA8yEVoHGCBjAv+hCERea7LSu1To7UQ4F0g82eAQu6kDjrEO/yuxX7PcfiqF5pStB7PGQLuLklYGa8aD87ylxXqd396H6bUbWj7qMR65J/lUyubBdZXlBqaUX68zgL/SWnCGZP6aP0CYDTDkofS9ZOGs9F3SgW57Fcf88LcqIkjFbaVrV2zr/K5U7WZdKDp8s5dNB+tMQLHXpnL7KUvCadpYCawzXhwe4V97gHj0Ev15paA13yCpqITaF7aTGdlOj82UA0OK7lEX3X9fdq2yR33Bri24yPhn7GtE+q63QJ7/jkkehTyY0Je8b+tM/nN3jbpKLHGLmtgOxYFZrXfmZDOE+SWWDMnBLDbmmJjuAp2HAbPC4UMUmD5xlrUzBmTsP+UWcMUDzQUgZDg3Fqw3dl3LfVPyxa13yE5GmBDD+pmD5gvQo3ZS5SoVmM/BWAcF4gXEIaa54cCPpAQXSKAZDoJNNdzTUGar3azwznc+v2ildPONbMQDG78eguGx/ILIH8fxQ/T9PO/sbjTZV4lbk6lYMpmdrP/BxvIAJuNkBxYKzNLGeAfDPFT4u6T6kBp5Q4L/N8dM0cadJU87A1yEEOlfrcPPMdIJ9b8/PeOXnlKaCKDRTaoR7Wh2cNq0ueAHGoa4/qOgirXBful5fCqvkTK0jcmoJlg+kF+sc+Ux57pwCGq3MC03MZTOPPICY/cY6SXWNwlppjiWCvQMGgSIVZUsGN4s4b0fRuHliaPplbt7KoChTGnVYGnoR9zQRfRl44SnBKUdbUvwGeZcvqq2L9Izeb0WaskB/W4JUS9rKQffZ2XoQsRUj8EJWyyb4UjwI2ToILwokSMjZpo2yHpQgTYDH6iYNzfAyJZcptJ7CqcvXSb0KzHjfptMzC6k7/xsuuVvkKQ8tn9npQxdpuiY97buD/uLJqfyJAoE0CkVejxeJoTJTBNmmPPYGABZsdOMzHuhWpcWUAQy3uEIdP0KP8+K0cUGjH9oTYZD/LiNY8nXnvlUxB+Oa2rHJsaVeygjG7lzjTpMH+CSW1GxlzLoYYjROxzyWjvNJx7jx1I1DAXOBjZTP2lGCcrp0gEE+og8/LNasP/SrLrlme1I+8rHxk24LtDF8vyo7T0aQ/YO2XoV+tkqQNlsNR8g+TSykHTzn1kvasnZ8GyE/60/Eb1cELQ+h6XY3r+z9cjLmLrzcJb+uN9apnNcxA2CQMoI3qsJLtfvevd7FIgQeC92nRUPhJmTiVvCyuvweINSd1V8Hr2V4CIvyqm/l1lF3/hUu+b7Q7Rqa9dp1B3v4muTq0R73Gn0P73Z24PUqR1EGcRratnBfrgZTDbI1VRrjKeqVYxwscTIMbtMe/8tRd+R0UD7CwKg7DlctSvv1eO6HJDj+czeXs4QYELafiUr4md4ILl4r13RZ6i+Uz+GhH1n9EY7ydcr5pPgv0Xt6L/2KS/RXhekDE2IAJp5lC9JDtUP+mE4VX4Eb5tQNiAWdpUXPKQW+oAhvJErX4y2WBfeGQr0ldef443ZCuyhe/d2q67df05uzLvj0lu7eplXzXYEJNQBGcP2QXqC40Z0s7Z2pe+17cQEHQzClFJWU4SUKzPIo32B+ViZSspJZeZ8f1YVA2PTJYG9VWPKPI8lNIk1bmHADMMkt3SXds2/UvVOGcGJfj3sGhsC1AxQQK6EhhVEmLhvhIueMq6H6VQhBwCvjvFsvd/7UQ6Pum7p2X1y9xDG9oGsGYGLTsvAsude3SsjHK94HhSHl3I0Z4Tn33yTujUAHU743qhhXGh4AAcgYRzTb75Crv6x/i7tueIpet/cd7vCh6wZg/b9+53Q3NX6k1tg3S0EHc5MOI9CNwMoSEZSUKbGAb8tAytb4TOlKhD3JQ2p/6diou3LOiLtDimd1mlEwaQZgUuaewrfnu/30Je3DpbTDpZAXK28Rl1eDkrxBxBdjvFEUDKKocJRN8BB45Wn0Dgr3gHjvUrxsrNfdsmRT8pCxzcR40g0gFjrG8LVB92ztFQ6QIRwkpe+vfN7IuUjpAXhRPoaBQZBGySifNGC4eJjNq3V4RN7i5wr/NtLjfpD2uXuH1yePeeYdh4m5DtBJuV7eny7STZY9pFn2Cy/SF0Zeqvh5UuiQlDzfG4EsR/Eq0R9UfI+m+d3i+5kM44HNm91jcu1rO9mn6VTX/wDQC1hwLkGOUgAAAABJRU5ErkJggg=="
        width="128"
      ></image>
    </Svg>
  );
};

export default Icon;