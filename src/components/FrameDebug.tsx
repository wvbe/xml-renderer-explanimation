import styled from '@emotion/styled';
import {useCurrentFrame, useVideoConfig} from 'remotion';

const Info = styled.pre``;
export default function () {
	const frame = useCurrentFrame();
	const {durationInFrames, fps, width, height} = useVideoConfig();

	const time = (frame / fps).toFixed(2);
	const progress = ((frame / durationInFrames) * 100).toFixed(2);
	return (
		<Info>
			{`
				RESOLUTION: ${width} x ${height} (${(width / height).toFixed(2)})
				FPS:        ${fps}
				FRAME:      ${frame}, ${time} seconds, ${progress}%
				TOTAL:      ${durationInFrames} frames, ${durationInFrames / fps} seconds
			`
				.trim()
				.replace(/\t/g, '')}
		</Info>
	);
}
