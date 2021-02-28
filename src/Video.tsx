import {css, Global} from '@emotion/react';
import {Composition} from 'remotion';
import MyComposition from './Composition';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Global
				styles={css`
					html {
						font-size: 30px;
					}
				`}
			/>
			<Composition
				id="MyComposition"
				component={MyComposition}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={
					{
						// titleText: 'Welcome to Remotion',
						// titleColor: 'black',
					}
				}
			/>
		</>
	);
};
