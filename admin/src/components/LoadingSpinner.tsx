function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-green-600 rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingSpinner;
