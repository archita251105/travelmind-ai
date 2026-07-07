const LoadingCard = () => {
  return (
    <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center animate-pulse">
      <p className="text-lg font-semibold text-blue-700">
        ✨ AI is planning your perfect trip...
      </p>

      <p className="mt-2 text-slate-600">
        Finding destinations, hotels, restaurants and travel tips...
      </p>
    </div>
  );
};

export default LoadingCard;