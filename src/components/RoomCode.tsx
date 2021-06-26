import copyImg from '../assets/images/copy.svg'

import { useDark } from '../hooks/useTheme';

import '../styles/room-code.scss';
import cx from 'classnames';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  const Theme = useDark();

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button className={cx('room-code', { dark: Theme.darkMode})} onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button> 
  )
}