import GreenButton from "@/app/components/ui/GreenButton";

export default function ModalContent(props: { onClose: any }) {
  const { onClose } = props;
  return (
    <div className="overflow-hidden fixed top-0 right-0 left-0 z-50 bg-gray-400/80 justify-center items-center w-full h-full">
      <div className="absolute rounded-lg p-4 w-full max-w-md max-h-full bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <button
          onClick={() => onClose()}
          type="button"
          className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="text-center mt-8">
          <p>自治体のホームページに移動します</p>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <GreenButton text={"移動する"} />
        </div>
      </div>
    </div>
  );
}
