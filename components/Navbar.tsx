import { Dispatch, FC, SetStateAction } from "react";
import ToggleEnum from "../enum/toggle.enum";

type Props = {
    page: ToggleEnum,
    setPage: Dispatch<SetStateAction<ToggleEnum>>
}

const Navbar: FC<Props> = ({ page, setPage }) => {
    return (
        <nav>
            <button onClick={()=>setPage(ToggleEnum.PLANETS)} className={ page === ToggleEnum.PLANETS ? 'is-active' : ''}>
                Planets
            </button>
            <button onClick={()=>setPage(ToggleEnum.PEOPLE)} className={ page === ToggleEnum.PEOPLE ? 'is-active' : ''}>
                People
            </button>
        </nav>
    )
}

export default Navbar;