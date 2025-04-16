const SocMedCard = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <div className="flex gap-4 bg-gray-100 px-2 py-4">
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default SocMedCard;
