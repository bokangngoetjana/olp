using System.ComponentModel.DataAnnotations;

namespace OnlineLearningPlatform.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}