import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
import volcano from '@iconify/icons-emojione/volcano'


const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} />WildFire & <Icon icon={volcano} />Volcano Tracker</h1>            
        </header>
    )
}

export default Header
