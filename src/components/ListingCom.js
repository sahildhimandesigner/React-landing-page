const Listing = ({ classname}) => {
    return (
        <>
            <div className={classname}>
                <ul role="list" className="w-full">
                    <li class="flex gap-x-6 bg-[#fa990c] text-white rounded-md">
                        <div class="flex min-w-0 gap-x-4 border-b-2 p-4 w-full">
                            <div class="min-w-0 flex-auto text-start pb-4">
                                <p class="text-md font-semibold leading-6">#1</p>
                                <p class="mt-1 truncate text-md leading-5">Gerneral Symptons</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex gap-x-6">
                        <div class="flex min-w-0 gap-x-4 border-b-2 p-4 w-full">
                            <div class="min-w-0 flex-auto text-start pb-4">
                                <p class="text-md font-semibold leading-6">#1</p>
                                <p class="mt-1 truncate text-md leading-5">Gerneral Symptons</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex gap-x-6">
                        <div class="flex min-w-0 gap-x-4 border-b-2 p-4 w-full">
                            <div class="min-w-0 flex-auto text-start pb-4">
                                <p class="text-md font-semibold leading-6">#1</p>
                                <p class="mt-1 truncate text-md leading-5">Gerneral Symptons</p>
                            </div>
                        </div>
                    </li>
                    <li class="flex gap-x-6">
                        <div class="flex min-w-0 gap-x-4 border-b-2 p-4 w-full">
                            <div class="min-w-0 flex-auto text-start pb-4">
                                <p class="text-md font-semibold leading-6">#1</p>
                                <p class="mt-1 truncate text-md leading-5">Gerneral Symptons</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Listing;