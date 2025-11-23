type Props = {
  at: string;
};
function LastUpdatedAt({ at }: Props) {
  return (
    <div className="italic text-sm text-center mt-[120px]">
      Last updated: {at}
    </div>
  );
}

export default LastUpdatedAt;
