import { parseISO, formatDistanceToNow } from "date-fns";
import React from 'react'

const TimeAgo = ({ timeStamp }) => {

    let timeAgo = '';

    // 들어온 타임스탬프가 있다면
    // 타임스탬프를 파싱하고 date라고 정함
    // date 지금 시간에서 어느정도 지났는지를 period에 넣음
    if (timeStamp) {
        const date = parseISO(timeStamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`
    }
    return (
        <span>
            <i> {timeAgo}</i>
        </span>
    )
}

export default TimeAgo