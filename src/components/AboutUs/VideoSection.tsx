import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/6DIpP8DTE8k";
  const thumbnailUrl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX/////ADP/ACX/ABP/9fb/maL/AC7/ACL/ADH/AB7/ACz/ACn/PlX/ACf/ABv/pLL/u8b/5er/2N//+vv/rrn/tL//UGv/8vX/6u7/4OL/aX//HEL/w8z/NVT/lKL/XHP/K07/0Nj/hpf/eIT/yc//UmX/ADj/RGD/I0j/bX3/CT7/cIT/OVr/gJH/WHD/vMH/eIz/oK//jJz/oqpyET5IAAAE6ElEQVR4nO2c7XaiPBRGESwQKCpgBb8VP0pb7dSZ+7+3N9a61tupzpqaJxKZZ/+1tGsXk5NzkhzLIoQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYT8gVTSbDazJEnmHUn7nbtzHD7e/+BcPpHJJ/e/oGqJT6RZHvfnnd2uKBaLXm88K10/chynJRES7x37HIeP9z+4f0A+F/puORv3eotFUezanXk/zrOKjLNk2d4OVvfDdShdpEMUhkHgur6kcTnyadd1gyAMI6kvvcP18H412LaXSXZFu7g7KP1IeFEYuGpCf6cchJEnIr8cdONr6DW7G8cLXc1ip1Td0HM23aZuwe6w5V7Z7f+4rWFbq1/8WKnfu6N41Phd7URBxX57Aq+jS/DBufbgO43vdDUJCjMEpaJ40CE4t00RlIphghdMSxPG4JGgxK90tl7VVp8QP9GCsSGzzBG/lYMNX6KqnX7DLrCCuWvWK5QvcY1dv3VF1UZfEEuo4dSkifRA9IYUzIamfUnlAvUeadhvVe3zFT9AzqZts4LhgdYIaFiYFiv22BOgYc+8iabRCJ+Ahs/mTTRyqhnjBFOnaptT+CHOMDFwKpU4uMn0wbwVzR7gZGpksGg0PFwxw8hgIcPFHcxwGlYtc5LwBWa4USmShtoiTdCDGaqEw3Db0vUNcEuYoUqVzUnj15aeJREuIGaeiqFMxZdjLaVW30MZxqqGMt6sbZzZEd9DhfxEJRweDK1s6+C/qh6qLjxSWdI4x4JR3BPofStYqQZjKH8PejgK1LLtB8jQSu9c6HAUP0CGXcA4/CB7QQ5HmOFE5R/v/Fa4TR492HCE1TF+Ig1lLlaihiPM8EVl2fXV0EondgRxhBWF0YaWlQ8gCzlYcqFU0j9paFnzDeCrGg5Ahkq1xDOGcoZ+VlkMvgNLn/QYWmnRUswdTTeUC7mpUBqOMMN7lQD2J0PVvAq2/aTRUOZVjcuj7W0YWtmbE1z4Hm/E0LL6l+ZVN2Mo86rZRcPxhgz3edUFijDDmX5DmXOsv694U+9wV+k75DhUNaz7XFr7eFj3NY0h69L65xaaDJt1zw9NyvGVNrnP1WkQFX5Ynab+tTZ8vdQzrF5a/5o3eN8Ct40IMwTuPeUDI/eekPuH0NNVMEPYHvBlOdJ5YHvAS4jhxTnSebw5yLD+ZzHqf55G+UwU/BDGAdyZKGPPtbkwQ5WzicFNnE2s//nS+p8RVlp668P+BTOs/1n9+t+3qP+dmfrfe6r/3bV/4P6hkdeCoHdIjQwX0HvARt7lDpF3uY28jz+GNnB5NW+qwfZUUCso6gFWhjqQX7oRrQ1/De4yVPv+NFZuWo8hge4xZBVmjUR8nyjTen3NNHQ1TfQVXL6Nln5tltWpe889k/omahK0rJEZvS9tbb0v9/1L4ftH38UXm74+QUl7WKmjK9Y7rX6SZrt0vEB3g+SvyL8YeE65u0pL6OTX69C1hR0FV+oFHUTyr7nD17aWGHGGfD6avE1Xs6FvO+JzP29FIf/Yz9v2hHAifzhbTd8mozl8lfZ3pFnc748edpNiu3harWazZ99vKfRkF740mvVWT4ttMdl1Rv04rqon+2nSj776eZIko2/11V/KJ/KPvvpGKRFCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBiHP8BxnOABwwsuQEAAAAASUVORK5CYII=";

  return (
    <section className="px-3 lg:px-20">
      <motion.h2
        className="text-5xl font-bold mb-16 text-primary text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        See Us in Action
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isPlaying && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-primary/90 p-6 rounded-full hover:bg-primary transition-colors duration-300"
              >
                <Play className="w-8 h-8 text-white" />
              </button>
            </div>
          )}
          <div className="aspect-video">
            {isPlaying ? (
              <iframe
                className="w-full h-full"
                src={`${videoUrl}?autoplay=1`}
                title="Company Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={thumbnailUrl}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
