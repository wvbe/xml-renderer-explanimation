import {Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Background} from './components/Background';
import {CodeBlock} from './components/codeblocks';
import FrameDebug from './components/FrameDebug';
import {Section} from './components/sections';

export default function MyComposition() {
	const frame = useCurrentFrame();
	const {durationInFrames} = useVideoConfig();

	return (
		<Sequence name="Test sequence" from={0} durationInFrames={durationInFrames}>
			<Background>
				<Section>
					<FrameDebug />
					<CodeBlock language={'bash'}>{`npm install xml-renderer`}</CodeBlock>
					<CodeBlock language={'javascript'}>{`function Nerf ({ nerf }) {
	return <Derp />;
				}`}</CodeBlock>
				</Section>
			</Background>
		</Sequence>
	);
}
