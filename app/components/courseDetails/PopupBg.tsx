

interface Props {
    show: boolean
    handleEnd: () => void
}

export default function PopupBg({ show, handleEnd }: Props) {
    return (
        <div onClick={handleEnd} className={`${show ? 'z-10' : 'hidden -z-20'} fixed  bg-black/50 backdrop-blur-sm left-0 top-0 w-full h-full }`} />

    )
}
