document.addEventListener("DOMContentLoaded", () => {
    const username = "rafaelscdev";
    const apiUrl = `https://api.github.com/users/${username}`;

    async function fetchGitHubProfile() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error("Erro ao buscar os dados do GitHub");
            }

            const data = await response.json();

            document.getElementById("profile-avatar").src = data.avatar_url;
            document.getElementById("profile-name").textContent = data.name || "Nome não disponível";
            document.getElementById("profile-username").textContent = `@${data.login}`;
            document.getElementById("profile-link").href = data.html_url;
            document.getElementById("repo-count").textContent = data.public_repos;
            document.getElementById("followers-count").textContent = data.followers;
            document.getElementById("following-count").textContent = data.following;
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao carregar os dados do GitHub!");
        }
    }

    fetchGitHubProfile();
});
