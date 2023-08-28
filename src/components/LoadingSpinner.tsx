import { useIsFetching } from "@tanstack/react-query"
import { Rings } from 'react-loader-spinner'

const LoadingSpinner = () => {
  const isFetching = useIsFetching()

  return isFetching ? (
        <div className="loading-spinner">
            <Rings
                height="120"
                width="120"
                color="#ffffff"
                radius="6"
                visible={true}
                ariaLabel="rings-loading"
            />
        </div>
  ) : null
}

export default LoadingSpinner
