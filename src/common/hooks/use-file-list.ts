import {useCallback, useState} from 'react'
import {RcFile} from 'antd/lib/upload'

const useFileList = () => {
    const [fileList, setFileList] = useState<RcFile[]>([]),
        beforeUpload = useCallback((file: RcFile) => {
            setFileList(prevState => [...prevState, file])
            return false
        }, []),
        removeFile = useCallback((file: RcFile) => {
            setFileList(prevState =>
                prevState.filter(item => file.uid !== item.uid)
            )
        }, [])

    return {
        fileList,
        beforeUpload,
        removeFile,
        setFileList,
    }
}

export default useFileList
