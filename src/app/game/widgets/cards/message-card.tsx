import React from "react";
import PropTypes from "prop-types";
import { Avatar, Typography } from "@material-tailwind/react";

interface MessageCardProps {
  img: string;
  name: string;
  message: React.ReactNode;
  action?: React.ReactNode;
}

export const MessageCard: React.FC<MessageCardProps> = ({ img, name, message, action }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar
          src={img}
          alt={name}
          variant="rounded"
          className="shadow-lg shadow-blue-gray-500/25" placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}        />
        <div>
          <Typography variant="small" color="blue-gray" className="mb-1 font-semibold"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            {name}
          </Typography>
          <Typography className="text-xs font-normal text-blue-gray-400"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            {message}
          </Typography>
        </div>
      </div>
      {action}
    </div>
  );
};

MessageCard.defaultProps = {
  action: null,
};

MessageCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  action: PropTypes.node,
};

export default MessageCard;
