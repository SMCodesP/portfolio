import { SkillContainer } from './styles';

import Tooltip from 'rc-tooltip';

import { useTheme } from 'styled-components';
import { useState } from 'react';

const Skill: React.FC<{
  skill: {
    name: string;
    id: string;
    Content: () => JSX.Element;
  };
}> = ({ skill }) => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Tooltip
      mouseEnterDelay={0}
      mouseLeaveDelay={0.1}
      animation="zoom"
      placement="top"
      overlay={<skill.Content />}
      trigger={[`hover`]}
      overlayStyle={
        isVisible
          ? {
              opacity: 1,
            }
          : {}
      }
      onPopupAlign={() => {
        setIsVisible(true);
      }}
      overlayInnerStyle={{
        backgroundColor: theme.comment,
        boxShadow: `0 0 12px ${theme.purple}22`,
        padding: 0,
      }}
      showArrow={false}
    >
      <SkillContainer>{skill.name}</SkillContainer>
    </Tooltip>
  );
};

export default Skill;
