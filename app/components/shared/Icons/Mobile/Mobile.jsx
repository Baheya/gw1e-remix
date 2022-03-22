import styles from './Mobile.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export function Mobile(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1.4em"
      height="1.4em"
      viewBox="0 0 200 200"
      xmlSpace="preserve"
      {...props}
    >
      <image
        width={200}
        height={200}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEUAAAC2koq3k4m3koi3 koi3kYm/j4+2kYm3k4e2kom3koe2kom3kYi2kom2kYm6j4q2kom3kYm3koi3koi2kom3kYm4kYi3 j4e2k4m3kon///9CYeokAAAAGXRSTlMAP3+/n18Q70CPYK/fcM8wwIDw0OCgbyBQvygO2QAAAAFi S0dEGnVn5DIAAAAHdElNRQfmAwkMFgO66npsAAABv0lEQVR42u3d3U6rQBhAUQSs1YMVlOrh/V/U n8RkWhqoZeJHzdqXk5m2KwSmaVIoCkmSJEmSJEmSpN/qpiyrRdXl7SYaUWzKuyFH1TbWsc3D+Ow+ 0vGQjfHRv8DjkdMxDHWUY9PkhQxR58ljZsfQBEF2uSHDUwxk8jO1p9d0k4u6EMcW5KeLQED+IuSi QEBAQH4DsvjtOxAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQ kD8JacqFVSuB5AsEBGTVkOc26WU0ctzXjD4d6VcCaUej7ey6g7/gr2UfAQEBAQEBAfnoLr2h3O48 SJOuaVYC+eGXv0vXgZwN6buk/XmQNl3TrgTSjkbnIas82UFAQKYhB7801qOR475mVH5pBJmHjDfE /mi7O7FlXuGG2J2ascqTHQQEZBoysyFWp2bYEEHOgNgQkxkgICBXANndJL1+jsxviHW6pv5+pZi7 lE/fN/6iHmMgL9khbzGQ7M9WaGMcRdEv/+wHhT0V5uk5q2Mf5cj8RJhAR9ZjEnTp/W7T5TlR9kEX rIOj0i3uf/xzrCRJkiRJkiRJkq6td7w3/fTbKlDGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTAz LTA5VDEyOjIyOjAzKzAwOjAwzMMAWQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wMy0wOVQxMjoy MjowMyswMDowML2euOUAAAAASUVORK5CYII="
      />
    </svg>
  );
}
