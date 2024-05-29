export function Chat() {
  return (
    <>
     
      <div class="flex mb-5 items-start gap-2.5">
                  <img
                    class="h-8 w-8 rounded-full"
                    src="/images/320186702_823742058729606_3659513607149413256_n.jpg"
                    alt="Jese image"
                  />
                  <div class="leading-1.5 border-gray-200 bg-gray-100 dark:bg-gray-700 flex w-full max-w-[320px] flex-col rounded-e-xl rounded-es-xl bg-primary p-4">
                    <div class="flex  items-center space-x-2 rtl:space-x-reverse">
                      <span class="text-gray-900 text-sm font-semibold dark:text-white">
                        Bonnie Green
                      </span>
                      <span class="text-gray-500 dark:text-gray-400 text-sm font-normal">
                        11:46
                      </span>
                    </div>
                    <p class="text-gray-900 py-2.5 text-sm font-normal dark:text-white">
                      That's awesome. I think our users will really appreciate
                      the improvements.
                    </p>
                    <span class="text-gray-500 dark:text-gray-400 text-sm font-normal">
                      Delivered
                    </span>
                  </div>
                  <button
                    id="dropdownMenuIconButton"
                    data-dropdown-toggle="dropdownDots"
                    data-dropdown-placement="bottom-start"
                    class="text-gray-900 hover:bg-gray-100 focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600 inline-flex items-center self-center rounded-lg bg-white p-2 text-center text-sm font-medium focus:outline-none focus:ring-4 dark:text-white"
                    type="button"
                  >
                    <svg
                      class="text-gray-500 dark:text-gray-400 h-4 w-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 4 15"
                    >
                      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </button>
                  <div
                    id="dropdownDots"
                    class="divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 z-10 hidden w-40 divide-y rounded-lg bg-white shadow"
                  >
                    <ul
                      class="text-gray-700 dark:text-gray-200 py-2 text-sm"
                      aria-labelledby="dropdownMenuIconButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 dark:hover:text-white"
                        >
                          Reply
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 dark:hover:text-white"
                        >
                          Forward
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 dark:hover:text-white"
                        >
                          Copy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="hover:bg-gray-100 dark:hover:bg-gray-600 block px-4 py-2 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
    </>
  );
}
{/* Người nhận */}
<div class="mb-2 flex items-center">
<img
  class="mr-2 h-8 w-8 rounded-full"
  src="/images/422673745_1431738810981438_8560367173620224784_n.jpg"
  alt="User Avatar"
/>
<div class="font-medium">Tiên</div>
</div>


{/* Đoạn chat người nhận gửi cho người gửi */}
<div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
Nhớ anh quá
</div>
<div class="mb-2 w-fit max-w-sm rounded-lg bg-primary p-2 text-white shadow">
Anh đang làm gì đó?
</div>

{/* Người gửi */}
<div class="mb-2 flex items-center justify-end">
<div class="mr-2 max-w-sm rounded-lg bg-primary p-2 text-white shadow">
  Anh đang làm đồ án
</div>
</div>
{/* END người gửi */}